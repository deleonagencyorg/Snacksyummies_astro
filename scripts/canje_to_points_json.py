#!/usr/bin/env python3
"""Procesa archivos Excel en /canje → JSONs geolocalizados por país.

Para cada fila con lat/lng: reverse-geocode para obtener país/departamento/ciudad.
Para filas solo con dirección: geocode para obtener todo (lat, lng, depto, ciudad).
Procesa coordenadas únicas en lotes de 100 para eficiencia.
"""

from __future__ import annotations

import json
import ssl
import sys
import datetime
import time
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional, Tuple
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import urlopen

import certifi
import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
CANJE_DIR = ROOT / "canje"
OUTPUT_DIR = ROOT / "src" / "locales" / "points"
OUTPUT_DIRS = [
    OUTPUT_DIR,
    ROOT / "src" / "locales" / "en" / "points",
    ROOT / "src" / "locales" / "es" / "points",
]
ENV_FILE = ROOT / ".env"
GOOGLE_GEOCODE_BASE = "https://maps.googleapis.com/maps/api/geocode/json"

COLUMN_ALIASES = {
    "nombre": ["nombre", "name", "cliente", "nombre 1", "nombre 2", "nombre1", "nombre2"],
    "direccion": ["direccion", "direccion", "address", "direccion completa", "ubicacion"],
    "latitud": ["latitud", "latitude", "lat"],
    "longitud": ["longitud", "longitude", "long"],
}

LOCATION_PRIORITY = [
    "locality", "administrative_area_level_2", "administrative_area_level_3",
    "postal_town", "neighborhood", "sublocality",
]

PROCESSED_FILES = OUTPUT_DIR / "_processed_files.json"
GEOCODE_CACHE_FILE = OUTPUT_DIR / "_geocode_cache.json"
BATCH_SIZE = 100


def log(msg: str) -> None:
    print(f"[{datetime.datetime.now():%H:%M:%S}] {msg}", flush=True)


def load_env(path: Path) -> Dict[str, str]:
    values = {}
    if not path.exists():
        return values
    with path.open("r", encoding="utf-8") as fp:
        for line in fp:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            values[k.strip()] = v.strip().strip('"').strip("'")
    return values


def normalize_header(name: str) -> str:
    return name.strip().lower().replace("ñ", "n").replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u").replace("ü", "u")


def find_column(header: Iterable[str], aliases: List[str]) -> Optional[str]:
    norm_map = {normalize_header(a): a for a in aliases}
    for col in header:
        if normalize_header(col) in norm_map:
            return col
    return None


def get_excel_files(directory: Path) -> List[Path]:
    files = []
    for p in sorted(directory.glob("**/*")):
        if p.is_file() and p.suffix.lower() in {".xls", ".xlsx", ".xlsm", ".xlsb"}:
            if p.name.startswith("~$") or p.name.startswith("._"):
                continue
            files.append(p)
    log(f"Archivos Excel encontrados en {directory}: {len(files)}")
    for f in files:
        log(f"  - {f.name}")
    return files


def call_api(params: Dict[str, str]) -> Dict[str, Any]:
    url = f"{GOOGLE_GEOCODE_BASE}?{urlencode(params)}"
    ctx = ssl.create_default_context(cafile=certifi.where())
    for attempt in range(3):
        try:
            with urlopen(url, timeout=30, context=ctx) as r:
                return json.loads(r.read().decode("utf-8"))
        except HTTPError as e:
            if e.code == 500 and attempt < 2:
                time.sleep(1 * (attempt + 1))
                continue
            return {}
        except Exception:
            return {}
    return {}


def rev_geocode(lat: str, lng: str, key: str) -> Dict[str, Any]:
    return call_api({"latlng": f"{lat},{lng}", "key": key, "language": "es"})


def address_geocode(addr: str, key: str) -> Dict[str, Any]:
    return call_api({"address": addr, "key": key, "language": "es"})


def extract_comp(components: List[Dict[str, Any]], types: List[str]) -> Optional[str]:
    for c in components:
        for t in c.get("types", []):
            if t in types:
                return c.get("long_name")
    return None


def parse_result(result: Dict[str, Any]) -> Dict[str, Optional[str]]:
    comps = result.get("address_components", [])
    country = extract_comp(comps, ["country"])
    depto = extract_comp(comps, ["administrative_area_level_1"])
    if depto:
        for pfx in ["Department of ", "Departamento de ", "Departement of "]:
            if depto.startswith(pfx):
                depto = depto[len(pfx):]
                break
        depto = depto.strip()
    ciudad = extract_comp(comps, LOCATION_PRIORITY) or extract_comp(comps, ["administrative_area_level_1"])
    direccion = result.get("formatted_address", "")
    loc = result.get("geometry", {}).get("location", {})
    lat = str(loc.get("lat")) if loc.get("lat") is not None else None
    lng = str(loc.get("lng")) if loc.get("lng") is not None else None
    return {"pais": country, "departamento": depto, "ciudad": ciudad, "direccion": direccion, "lat": lat, "lng": lng}


def detect_header_row(path: Path, sheet_name: Optional[str] = None) -> int:
    df = pd.read_excel(path, sheet_name=sheet_name, header=None, nrows=10, dtype=str)
    all_aliases = set()
    for aliases in COLUMN_ALIASES.values():
        for a in aliases:
            all_aliases.add(normalize_header(a))
    for i in range(min(10, len(df))):
        row = [str(v).strip() for v in df.iloc[i] if pd.notna(v)]
        if any(normalize_header(c) in all_aliases for c in row):
            return i
    return 0


def load_processed() -> set:
    if not PROCESSED_FILES.exists():
        return set()
    try:
        return set(json.loads(PROCESSED_FILES.read_text(encoding="utf-8")))
    except Exception:
        return set()


def save_processed(processed: set) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PROCESSED_FILES.write_text(json.dumps(sorted(processed), indent=2), encoding="utf-8")


def load_cache() -> Dict[str, Any]:
    if not GEOCODE_CACHE_FILE.exists():
        return {}
    try:
        return json.loads(GEOCODE_CACHE_FILE.read_text(encoding="utf-8"))
    except Exception as e:
        log(f"Error cargando caché: {e}")
        return {}


def save_cache(cache: Dict[str, Any]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    GEOCODE_CACHE_FILE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
    log(f"Caché guardado: {len(cache)} entradas ({sum(1 for v in cache.values() if v)} válidas)")


def sanitize_filename(value: str) -> str:
    if not value:
        return "unknown_country"
    name = value.lower().replace("ñ", "n").replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u").replace("ü", "u")
    san = "".join(ch for ch in name if ch.isalnum() or ch in {" ", "-", "_"}).strip().replace(" ", "_")
    while "__" in san:
        san = san.replace("__", "_")
    return san or "unknown_country"


def load_existing_points(output_path: Path, filename: str) -> Tuple[List[Dict], str]:
    target = output_path / filename
    if not target.exists():
        return [], ""
    try:
        data = json.loads(target.read_text(encoding="utf-8"))
        return data.get("points", []), data.get("source", "")
    except Exception:
        return [], ""


def merge_points(filename: str, new_pts: List[Dict], source: str) -> None:
    for out_dir in OUTPUT_DIRS:
        out_dir.mkdir(parents=True, exist_ok=True)
        existing, existing_source = load_existing_points(out_dir, filename)
        if existing:
            existing_keys = set()
            for p in existing:
                a = (p.get("direccion") or "").strip().lower()
                la = (p.get("latitud") or "").strip()
                lo = (p.get("longitud") or "").strip()
                existing_keys.add(f"{a}|{la}|{lo}")
            new = [p for p in new_pts if f"{(p.get('direccion') or '').strip().lower()}|{(p.get('latitud') or '').strip()}|{(p.get('longitud') or '').strip()}" not in existing_keys]
            if not new:
                log(f"  Sin puntos nuevos para {filename} en {out_dir.name}")
                continue
            merged = existing + new
            sources = sorted({s for s in [existing_source, source] if s})
            payload = {"source": "; ".join(sources), "points": merged}
            label, new_count = "Actualizado", len(new)
        else:
            payload = {"source": source, "points": new_pts}
            label, new_count = "Generado", len(new_pts)
        (out_dir / filename).write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
        log(f"  {label} {out_dir.name}/{filename} ({len(payload['points'])} pts, +{new_count} nuevos)")


def geocode_batch(jobs: List[Tuple[str, str, str]], api_key: str, cache: Dict[str, Any]) -> None:
    """jobs: list of (type, arg1, arg2). type='rev': (lat,lng); type='addr': (addr,'')"""
    for jtype, a1, a2 in jobs:
        if jtype == "rev":
            ck = f"rev:{a1},{a2}"
            if ck in cache:
                continue
            result = rev_geocode(a1, a2, api_key)
            if result.get("status") == "OK" and result.get("results"):
                cache[ck] = result["results"][0]
            else:
                cache[ck] = {}
            time.sleep(0.02)
        else:
            ck = f"geocode:{a1}"
            if ck in cache:
                continue
            result = address_geocode(a1, api_key)
            if result.get("status") == "OK" and result.get("results"):
                cache[ck] = result["results"][0]
            else:
                cache[ck] = {}
            time.sleep(0.02)


def process_excel(path: Path, api_key: str, cache: Dict[str, Any]) -> None:
    log(f"\n{'='*60}")
    log(f"PROCESANDO: {path.name}")
    log(f"{'='*60}")

    sheet_names = pd.ExcelFile(path, engine="openpyxl").sheet_names
    log(f"Hojas: {sheet_names}")

    # Collect all rows across all sheets
    all_rows: List[Dict] = []
    for sheet in sheet_names:
        hr = detect_header_row(path, sheet)
        df = pd.read_excel(path, sheet_name=sheet, header=hr, dtype=str)
        if df.empty:
            log(f"  [{sheet}] hoja vacía")
            continue
        cols = list(df.columns)
        nombre_col = find_column(cols, COLUMN_ALIASES["nombre"])
        addr_col = find_column(cols, COLUMN_ALIASES["direccion"])
        lat_col = find_column(cols, COLUMN_ALIASES["latitud"])
        lng_col = find_column(cols, COLUMN_ALIASES["longitud"])
        log(f"  [{sheet}] cols: nombre={nombre_col}, dir={addr_col}, lat={lat_col}, lng={lng_col} | {len(df)} filas")

        if not addr_col and (not lat_col or not lng_col):
            log(f"  [{sheet}] sin columnas de ubicación, saltando")
            continue

        for _, row in df.iterrows():
            nombre_v = str(row[nombre_col]).strip() if nombre_col and pd.notna(row.get(nombre_col)) else None
            addr_v = str(row[addr_col]).strip() if addr_col and pd.notna(row.get(addr_col)) else None
            lat_v = str(row[lat_col]).strip() if lat_col and pd.notna(row.get(lat_col)) else None
            lng_v = str(row[lng_col]).strip() if lng_col and pd.notna(row.get(lng_col)) else None
            all_rows.append({"nombre": nombre_v, "direccion": addr_v, "latitud": lat_v, "longitud": lng_v, "sheet": sheet})

    log(f"Total filas recolectadas: {len(all_rows)}")

    # Separate into rev-geocode and address-geocode jobs
    rev_coords: Dict[Tuple[str, str], List[int]] = {}
    addr_list: Dict[str, List[int]] = {}
    for idx, r in enumerate(all_rows):
        if r["latitud"] and r["longitud"]:
            rev_coords.setdefault((r["latitud"], r["longitud"]), []).append(idx)
        elif r["direccion"]:
            addr_list.setdefault(r["direccion"], []).append(idx)

    total_rev = len(rev_coords)
    total_addr = len(addr_list)
    log(f"Coords únicas a reverse-geocodificar: {total_rev}")
    log(f"Direcciones únicas a geocodificar: {total_addr}")

    if not total_rev and not total_addr:
        log("No hay datos que procesar.")
        return

    # Clean stale cache entries
    for lat, lng in rev_coords:
        ck = f"rev:{lat},{lng}"
        if ck in cache and not cache[ck]:
            del cache[ck]
    for addr in addr_list:
        ck = f"geocode:{addr}"
        if ck in cache and not cache[ck]:
            del cache[ck]

    # Build job list for batching
    rev_items = [(lat, lng) for (lat, lng) in rev_coords]
    addr_items = [addr for addr in addr_list]

    # --- Batch reverse geocode ---
    total_rev_jobs = len(rev_items)
    if total_rev_jobs:
        log(f"\n--- Reverse geocode ({total_rev_jobs} coords únicas) ---")
        for start in range(0, total_rev_jobs, BATCH_SIZE):
            end = min(start + BATCH_SIZE, total_rev_jobs)
            batch = rev_items[start:end]
            jobs = [("rev", lat, lng) for lat, lng in batch]
            geocode_batch(jobs, api_key, cache)

            # Apply results
            for lat, lng in batch:
                ck = f"rev:{lat},{lng}"
                if not cache.get(ck):
                    continue
                data = parse_result(cache[ck])
                for idx in rev_coords[(lat, lng)]:
                    if data["pais"]: all_rows[idx]["pais"] = data["pais"]
                    if data["departamento"]: all_rows[idx]["departamento"] = data["departamento"]
                    if data["ciudad"]: all_rows[idx]["ciudad"] = data["ciudad"]
                    if data["direccion"] and not all_rows[idx]["direccion"]:
                        all_rows[idx]["direccion"] = data["direccion"]

            save_cache(cache)
            done = sum(1 for p in all_rows if p.get("latitud") and p.get("departamento"))
            log(f"  rev lote {end//BATCH_SIZE}/{(total_rev_jobs+BATCH_SIZE-1)//BATCH_SIZE}: {end}/{total_rev_jobs} | {done} pts con depto")

    # --- Batch address geocode ---
    total_addr_jobs = len(addr_items)
    if total_addr_jobs:
        log(f"\n--- Address geocode ({total_addr_jobs} direcciones únicas) ---")
        for start in range(0, total_addr_jobs, BATCH_SIZE):
            end = min(start + BATCH_SIZE, total_addr_jobs)
            batch = addr_items[start:end]
            jobs = [("addr", a, "") for a in batch]
            geocode_batch(jobs, api_key, cache)

            # Apply results
            for addr in batch:
                ck = f"geocode:{addr}"
                if not cache.get(ck):
                    continue
                data = parse_result(cache[ck])
                for idx in addr_list[addr]:
                    if data["pais"]: all_rows[idx]["pais"] = data["pais"]
                    if data["departamento"]: all_rows[idx]["departamento"] = data["departamento"]
                    if data["ciudad"]: all_rows[idx]["ciudad"] = data["ciudad"]
                    if data["lat"]: all_rows[idx]["latitud"] = data["lat"]
                    if data["lng"]: all_rows[idx]["longitud"] = data["lng"]
                    if data["direccion"] and not all_rows[idx]["direccion"]:
                        all_rows[idx]["direccion"] = data["direccion"]

            save_cache(cache)
            done = sum(1 for p in all_rows if p.get("departamento"))
            log(f"  addr lote {end//BATCH_SIZE}/{(total_addr_jobs+BATCH_SIZE-1)//BATCH_SIZE}: {end}/{total_addr_jobs} | {done} pts con depto")

    save_cache(cache)

    # Group by paese and merge into JSONs
    log(f"\n--- Mergeando resultados ---")
    country_groups: Dict[str, List[Dict]] = {}
    for r in all_rows:
        pais = r.get("pais") or "unknown"
        country_groups.setdefault(pais, []).append({
            "pais": r.get("pais"),
            "departamento": r.get("departamento"),
            "ciudad": r.get("ciudad"),
            "nombre": r.get("nombre"),
            "direccion": r.get("direccion"),
            "latitud": r.get("latitud"),
            "longitud": r.get("longitud"),
        })

    for pais, pts in country_groups.items():
        fname = f"{sanitize_filename(pais)}.json"
        null_depto = sum(1 for p in pts if not p.get("departamento"))
        null_ciudad = sum(1 for p in pts if not p.get("ciudad"))
        null_lat = sum(1 for p in pts if not p.get("latitud"))
        log(f"  {pais}: {len(pts)} pts (sin depto: {null_depto}, sin ciudad: {null_ciudad}, sin lat: {null_lat})")
        merge_points(fname, pts, path.name)

    log(f"\n✓ {path.name} procesado.")


def main() -> int:
    env = load_env(ENV_FILE)
    api_key = env.get("PUBLIC_GOOGLE_MAPS_API_KEY")
    if not api_key:
        log("ERROR: No PUBLIC_GOOGLE_MAPS_API_KEY en .env")
        return 1

    canje_dir = CANJE_DIR
    if not canje_dir.exists():
        log(f"ERROR: {canje_dir} no existe")
        return 1

    files = get_excel_files(canje_dir)
    if not files:
        log("No hay archivos Excel en /canje")
        return 0

    processed = load_processed()
    log(f"Ya procesados: {len(processed)} archivos")

    cache = load_cache()
    log(f"Caché inicial: {len(cache)} entradas ({sum(1 for v in cache.values() if v)} válidas)")

    for excel_file in files:
        if excel_file.name in processed:
            log(f"'{excel_file.name}' ya procesado, saltando")
            continue
        try:
            process_excel(excel_file, api_key, cache)
            processed.add(excel_file.name)
            save_processed(processed)
        except Exception as e:
            log(f"ERROR en {excel_file.name}: {e}")
            import traceback
            traceback.print_exc()

    log(f"\n{'='*60}")
    log("PROCESO COMPLETADO")
    log(f"Archivos procesados: {len(processed)}")
    for f in sorted(processed):
        log(f"  - {f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
