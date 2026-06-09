#!/usr/bin/env python3
"""Convierte todos los archivos Excel dentro de /canje en JSON de puntos geolocalizados.

El script busca columnas de dirección y/o latitud/longitud, usa Google Maps Geocoding API
para obtener país, departamento y ciudad, y genera un JSON por cada Excel en
/src/locales/points con el nombre del país.

Requisitos:
    pip install pandas openpyxl

Uso:
    python3 scripts/canje_to_points_json.py
"""

from __future__ import annotations

import csv
import json
import ssl
import sys
import datetime
import time
import random
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional, Tuple
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import urlopen

import certifi
import pandas as pd
import random

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
    "direccion": ["direccion", "dirección", "address", "direccion completa", "ubicacion"],
    "latitud": ["latitud", "latitude", "lat"],
    "longitud": ["longitud", "longitude", "long"]
}

# Override: map filename patterns to countries to skip geocoding for bulk loads
FILE_COUNTRY_MAP = {
    "honduras": "Honduras",
    "cr": "Costa Rica",
    "sv": "El Salvador",
    "ni": "Nicaragua",
    "guatemala": "Guatemala",
    "gt": "Guatemala",
}

LOCATION_PRIORITY = [
    "locality",
    "administrative_area_level_2",
    "administrative_area_level_3",
    "postal_town",
    "neighborhood",
    "sublocality",
]

PROCESSED_FILES = OUTPUT_DIR / "_processed_files.json"
GEOCODE_CACHE_FILE = OUTPUT_DIR / "_geocode_cache.json"


def log(msg: str) -> None:
    print(f"[{datetime.datetime.now():%H:%M:%S}] {msg}")


def load_env(path: Path) -> Dict[str, str]:
    values: Dict[str, str] = {}
    if not path.exists():
        return values

    with path.open("r", encoding="utf-8") as fp:
        for line in fp:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" not in line:
                continue
            key, value = line.split("=", 1)
            values[key.strip()] = value.strip().strip('"').strip("'")
    return values


def normalize_header(name: str) -> str:
    return name.strip().lower().replace("\u00f1", "n").replace("\u00e1", "a").replace("\u00e9", "e").replace("\u00ed", "i").replace("\u00f3", "o").replace("\u00fa", "u").replace("\u00fc", "u")


def find_column(header: Iterable[str], aliases: List[str]) -> Optional[str]:
    normalized_aliases = {normalize_header(alias): alias for alias in aliases}
    for column in header:
        normalized = normalize_header(column)
        if normalized in normalized_aliases:
            return column
    return None


def get_excel_files(directory: Path) -> List[Path]:
    files = []
    for path in sorted(directory.glob("**/*")):
        if path.is_file() and path.suffix.lower() in {".xls", ".xlsx", ".xlsm", ".xlsb"}:
            if path.name.startswith("~$") or path.name.startswith("._"):
                continue
            files.append(path)
    log(f"Buscando archivos Excel en {directory}... encontrados: {len(files)}")
    return files


def build_geocode_url(params: Dict[str, str]) -> str:
    return f"{GOOGLE_GEOCODE_BASE}?{urlencode(params)}"


def call_geocode_api(params: Dict[str, str]) -> Dict[str, Any]:
    url = build_geocode_url(params)
    context = ssl.create_default_context(cafile=certifi.where())
    # Mask API key for logging
    try:
        params_log = dict(params)
        if "key" in params_log:
            params_log["key"] = "<redacted>"
    except Exception:
        params_log = {"info": "(no params)"}

    max_attempts = 6
    backoff = 1.0
    for attempt in range(1, max_attempts + 1):
        log(f"  Llamando geocode {params_log} (intento {attempt}/{max_attempts})")
        try:
            with urlopen(url, timeout=30, context=context) as response:
                raw = response.read().decode("utf-8")
                return json.loads(raw)
        except HTTPError as exc:
            status = getattr(exc, "code", None)
            if status and 500 <= status < 600 and attempt < max_attempts:
                wait = backoff + random.random() * 1.0
                log(f"  HTTP {status} al llamar a la API, reintentando en {wait:.1f}s")
                time.sleep(wait)
                backoff *= 2
                continue
            log(f"  HTTP error al llamar a la API de geocodificación: {getattr(exc,'code', '')} {getattr(exc,'reason','')}")
            return {}
        except URLError as exc:
            if attempt < max_attempts:
                wait = backoff + random.random() * 1.0
                log(f"  Error de red al llamar a la API: {exc}. Reintentando en {wait:.1f}s")
                time.sleep(wait)
                backoff *= 2
                continue
            log(f"  Error de red al llamar a la API de geocodificación: {exc}")
            return {}
        except Exception as exc:
            if attempt < max_attempts:
                wait = backoff + random.random() * 1.0
                log(f"  Error inesperado al llamar a la API: {exc}. Reintentando en {wait:.1f}s")
                time.sleep(wait)
                backoff *= 2
                continue
            log(f"  Error inesperado al llamar a la API de geocodificación: {exc}")
            return {}


def geocode_address(address: str, api_key: str) -> Dict[str, Any]:
    params = {"address": address, "key": api_key, "language": "es"}
    return call_geocode_api(params)


def reverse_geocode(lat: str, lng: str, api_key: str) -> Dict[str, Any]:
    params = {"latlng": f"{lat},{lng}", "key": api_key, "language": "es"}
    return call_geocode_api(params)


def extract_component(components: List[Dict[str, Any]], types: List[str]) -> Optional[str]:
    for component in components:
        for t in component.get("types", []):
            if t in types:
                return component.get("long_name")
    return None


def extract_location_data(result: Dict[str, Any]) -> Dict[str, Optional[str]]:
    components = result.get("address_components", [])
    country = extract_component(components, ["country"])
    departamento = extract_component(components, ["administrative_area_level_1"])
    if departamento:
        parts = departamento.replace("Department of ", "").replace("Departamento de ", "").replace("Departement of ", "").strip()
        if parts:
            departamento = parts
    ciudad = extract_component(components, LOCATION_PRIORITY)
    if ciudad is None:
        ciudad = extract_component(components, ["administrative_area_level_1", "administrative_area_level_2"])
    return {
        "pais": country,
        "departamento": departamento,
        "ciudad": ciudad,
    }


def resolve_country_from_filename(filename: str) -> Optional[str]:
    lower = filename.lower()
    for pattern, country in FILE_COUNTRY_MAP.items():
        if pattern in lower:
            return country
    return None


def resolve_location(
    row: pd.Series,
    address_col: Optional[str],
    lat_col: Optional[str],
    lng_col: Optional[str],
    nombre_col: Optional[str],
    api_key: str,
    cache: Dict[str, Dict[str, Any]],
    file_country: Optional[str] = None,
) -> Dict[str, Optional[str]]:
    nombre_value = None
    if nombre_col and pd.notna(row.get(nombre_col, None)):
        nombre_value = str(row[nombre_col]).strip()

    address_value = None
    if address_col and pd.notna(row.get(address_col, None)):
        address_value = str(row[address_col]).strip()

    lat_value = None
    lng_value = None
    if lat_col and pd.notna(row.get(lat_col, None)):
        lat_value = str(row[lat_col]).strip()
    if lng_col and pd.notna(row.get(lng_col, None)):
        lng_value = str(row[lng_col]).strip()

    if not address_value and (not lat_value or not lng_value):
        return {"pais": None, "departamento": None, "ciudad": None, "nombre": nombre_value, "direccion": None, "latitud": None, "longitud": None}

    location_info: Dict[str, Optional[str]] = {}
    if lat_value and lng_value:
        cache_key = f"rev:{lat_value},{lng_value}"
        if cache_key not in cache:
            response = reverse_geocode(lat_value, lng_value, api_key)
            if response.get("status") != "OK" or not response.get("results"):
                cache[cache_key] = {}
            else:
                cache[cache_key] = response["results"][0]
            time.sleep(0.1)
        result = cache[cache_key]
        if result and "pais" in result:
            location_info = result
        else:
            location_info = extract_location_data(result) if result else {"pais": None, "departamento": None, "ciudad": None}
        # Override with known country if file_country is set
        if file_country and not location_info.get("pais"):
            location_info["pais"] = file_country
    elif address_value:
        cache_key = f"geocode:{address_value}"
        if cache_key not in cache:
            response = geocode_address(address_value, api_key)
            if response.get("status") != "OK" or not response.get("results"):
                cache[cache_key] = {}
            else:
                cache[cache_key] = response["results"][0]
            time.sleep(0.1)
        result = cache[cache_key]
        if result and (not lat_value or not lng_value):
            geometry = result.get("geometry", {})
            location = geometry.get("location", {})
            lat_value = lat_value or str(location.get("lat"))
            lng_value = lng_value or str(location.get("lng"))
        if result and "pais" in result:
            location_info = result
        else:
            location_info = extract_location_data(result) if result else {"pais": None, "departamento": None, "ciudad": None}
        if file_country and not location_info.get("pais"):
            location_info["pais"] = file_country
    else:
        location_info = {"pais": file_country, "departamento": None, "ciudad": None}

    return {
        "pais": location_info.get("pais"),
        "departamento": location_info.get("departamento"),
        "ciudad": location_info.get("ciudad"),
        "nombre": nombre_value,
        "direccion": address_value,
        "latitud": lat_value,
        "longitud": lng_value,
    }


def detect_header_row(path: Path, sheet_name: Optional[str] = None) -> int:
    """Encuentra la fila donde están los encabezados (0-indexed)."""
    df_raw = pd.read_excel(path, sheet_name=sheet_name, header=None, nrows=10, dtype=str)
    all_aliases = set()
    for aliases in COLUMN_ALIASES.values():
        for a in aliases:
            all_aliases.add(normalize_header(a))
    for i in range(min(10, len(df_raw))):
        row = [str(v).strip() for v in df_raw.iloc[i] if pd.notna(v)]
        if any(normalize_header(c) in all_aliases for c in row):
            return i
    return 0


def batch_geocode(df: pd.DataFrame, lat_col: Optional[str], lng_col: Optional[str], api_key: str, cache: Dict[str, Dict[str, Any]], file_country: Optional[str]) -> None:
    """Pre-geocode all unique lat/lng pairs in parallel to speed up row processing."""
    if not lat_col or not lng_col:
        return

    # Collect unique lat/lng pairs that are missing from cache
    unique_pairs = set()
    for _, row in df.iterrows():
        if pd.notna(row.get(lat_col, None)) and pd.notna(row.get(lng_col, None)):
            lat = str(row[lat_col]).strip()
            lng = str(row[lng_col]).strip()
            if lat and lng:
                cache_key = f"rev:{lat},{lng}"
                if cache_key not in cache:
                    unique_pairs.add((lat, lng))

    if not unique_pairs:
        return

    log(f"  Geocodificando {len(unique_pairs)} coordenadas únicas en paralelo...")

    def geocode_pair(lat: str, lng: str) -> Tuple[str, Optional[Dict[str, Any]]]:
        try:
            response = reverse_geocode(lat, lng, api_key)
            if response.get("status") == "OK" and response.get("results"):
                result = response["results"][0]
                info = extract_location_data(result)
                # If we know the country from filename, override it
                if file_country:
                    info["pais"] = file_country
                return f"rev:{lat},{lng}", info
            else:
                # If reverse geocode fails, try forward geocode with address
                return f"rev:{lat},{lng}", {"pais": file_country, "departamento": None, "ciudad": None}
        except Exception as exc:
            log(f"  Error geocodificando {lat},{lng}: {exc}")
            return f"rev:{lat},{lng}", {"pais": file_country, "departamento": None, "ciudad": None}

    completed = 0
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = {executor.submit(geocode_pair, lat, lng): (lat, lng) for lat, lng in unique_pairs}
        for future in as_completed(futures):
            cache_key, info = future.result()
            cache[cache_key] = info
            completed += 1
            if completed % 100 == 0:
                log(f"  Geocodificados {completed}/{len(unique_pairs)}...")

    log(f"  Geocodificación completada: {len(unique_pairs)} nuevas entradas")


def process_sheet(df: pd.DataFrame, path: Path, sheet_name: str, api_key: str, cache: Dict[str, Dict[str, Any]], file_country: Optional[str] = None) -> Dict[str, List[Dict[str, Optional[str]]]]:
    if df.empty:
        return {}

    header = list(df.columns)
    nombre_col = find_column(header, COLUMN_ALIASES["nombre"])
    address_col = find_column(header, COLUMN_ALIASES["direccion"])
    lat_col = find_column(header, COLUMN_ALIASES["latitud"])
    lng_col = find_column(header, COLUMN_ALIASES["longitud"])

    if not address_col and (not lat_col or not lng_col):
        log(f"  [{path.name}:{sheet_name}] columnas no encontradas, saltando")
        return {}

    # Pre-geocode all unique coordinates first (parallel batch)
    batch_geocode(df, lat_col, lng_col, api_key, cache, file_country)

    country_points: Dict[str, List[Dict[str, Optional[str]]]] = {}
    row_count = 0
    total = len(df)
    log(f"  [{path.name}:{sheet_name}] {total} filas por procesar...")

    for i, (_, row) in enumerate(df.iterrows(), 1):
        try:
            point = resolve_location(row, address_col, lat_col, lng_col, nombre_col, api_key, cache, file_country)
        except Exception as e:
            log(f"  [{path.name}:{sheet_name}] Error fila {i}: {e}")
            continue
        if point["latitud"] is None or point["longitud"] is None:
            log(f"  [{path.name}:{sheet_name}] Aviso fila {i}: datos incompletos")
        pais = point.get("pais") or "unknown"
        country_points.setdefault(pais, []).append(point)
        row_count += 1

        if i % 500 == 0:
            log(f"  [{path.name}:{sheet_name}] {i}/{total} filas... ({len(cache)} en caché)")

    log(f"  [{path.name}:{sheet_name}] {row_count} filas procesadas, {len(country_points)} pa\u00edses")
    return country_points


def process_excel(path: Path, api_key: str) -> List[Tuple[str, List[Dict[str, Optional[str]]]]]:
    log(f"Procesando {path.name}...")

    file_country = resolve_country_from_filename(path.name)
    if file_country:
        log(f"  País detectado por nombre: {file_country} (saltando geocodificación)")
    else:
        log(f"  Usando geocodificación para detectar país")

    sheet_names = pd.ExcelFile(path, engine="openpyxl").sheet_names
    log(f"  Hojas encontradas: {sheet_names}")

    cache = load_geocode_cache()
    log(f"  Caché geocode cargado: {len(cache)} entradas")
    cache_modified = False
    all_country_points: Dict[str, List[Dict[str, Optional[str]]]] = {}

    for sheet_name in sheet_names:
        header_row = detect_header_row(path, sheet_name)
        df = pd.read_excel(path, sheet_name=sheet_name, header=header_row, dtype=str)
        sheet_points = process_sheet(df, path, sheet_name, api_key, cache, file_country)
        cache_modified = True
        for pais, pts in sheet_points.items():
            all_country_points.setdefault(pais, []).extend(pts)

    if cache_modified:
        save_geocode_cache(cache)

    log(f"  {path.name}: total {sum(len(v) for v in all_country_points.values())} puntos en {len(all_country_points)} pa\u00edses")

    results = []
    for pais, pts in all_country_points.items():
        filename = f"{sanitize_filename(pais)}.json"
        results.append((filename, pts))

    if not results:
        log(f"  Aviso: no se generaron puntos para {path.name}")

    return results


def sanitize_filename(value: str) -> str:
    if not value:
        return "unknown_country"
    name = value.lower()
    name = name.replace("\u00f1", "n").replace("\u00e1", "a").replace("\u00e9", "e").replace("\u00ed", "i").replace("\u00f3", "o").replace("\u00fa", "u").replace("\u00fc", "u")
    sanitized = "".join(ch for ch in name if ch.isalnum() or ch in {" ", "-", "_"})
    sanitized = sanitized.strip().replace(" ", "_")
    while "__" in sanitized:
        sanitized = sanitized.replace("__", "_")
    return sanitized or "unknown_country"


def load_existing_points(output_path: Path, filename: str) -> Tuple[List[Dict[str, Optional[str]]], str]:
    target_file = output_path / filename
    if not target_file.exists():
        return [], ""
    try:
        with target_file.open("r", encoding="utf-8") as fp:
            data = json.load(fp)
        return data.get("points", []), data.get("source", "")
    except Exception as e:
        log(f"  Aviso: no se pudo leer {target_file}: {e}")
        return [], ""


def make_point_key(point: Dict[str, Optional[str]]) -> str:
    address = (point.get("direccion") or "").strip().lower()
    lat = (point.get("latitud") or "").strip()
    lng = (point.get("longitud") or "").strip()
    return f"{address}|{lat}|{lng}"


def write_json_file(output_path: Path, filename: str, data: List[Dict[str, Optional[str]]], source: str) -> None:
    output_path.mkdir(parents=True, exist_ok=True)
    target_file = output_path / filename

    existing_points, existing_source = load_existing_points(output_path, filename)

    if existing_points:
        existing_keys = {make_point_key(p) for p in existing_points}
        new_points = [p for p in data if make_point_key(p) not in existing_keys]
        if not new_points:
            log(f"  Sin puntos nuevos para {filename} en {output_path}, omitiendo")
            return
        merged = existing_points + new_points
        sources = sorted({s for s in [existing_source, source] if s})
        payload = {"source": "; ".join(sources), "points": merged}
        new_count = len(new_points)
    else:
        payload = {"source": source, "points": data}
        new_count = len(data)

    with target_file.open("w", encoding="utf-8") as fp:
        json.dump(payload, fp, ensure_ascii=False, indent=2)
    label = "Actualizado" if existing_points else "Generado"
    log(f"  {label} {target_file} ({len(payload['points'])} puntos, {new_count} nuevos) -> {output_path}")


def load_processed_files() -> set:
    if not PROCESSED_FILES.exists():
        return set()
    try:
        with PROCESSED_FILES.open("r", encoding="utf-8") as fp:
            return set(json.load(fp))
    except Exception as e:
        log(f"Aviso: no se pudo leer archivo de procesos: {e}")
        return set()


def save_processed_files(processed: set) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    with PROCESSED_FILES.open("w", encoding="utf-8") as fp:
        json.dump(sorted(processed), fp, indent=2)


def load_geocode_cache() -> Dict[str, Any]:
    cache = {}
    # Load from disk cache file
    if GEOCODE_CACHE_FILE.exists():
        try:
            with GEOCODE_CACHE_FILE.open("r", encoding="utf-8") as fp:
                cache = json.load(fp)
        except Exception as e:
            log(f"Aviso: no se pudo leer caché geocode: {e}")

    # Pre-populate from existing JSON files (avoid re-geocoding known coordinates)
    for output_dir in OUTPUT_DIRS:
        if not output_dir.exists():
            continue
        for json_file in output_dir.glob("*.json"):
            if json_file.name.startswith("_"):
                continue
            try:
                with json_file.open("r", encoding="utf-8") as fp:
                    data = json.load(fp)
                for pt in data.get("points", []):
                    lat = pt.get("latitud")
                    lng = pt.get("longitud")
                    if lat and lng:
                        key = f"rev:{lat},{lng}"
                        if key not in cache:
                            cache[key] = {
                                "pais": pt.get("pais"),
                                "departamento": pt.get("departamento"),
                                "ciudad": pt.get("ciudad"),
                            }
            except Exception:
                pass

    return cache


def save_geocode_cache(cache: Dict[str, Any]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    with GEOCODE_CACHE_FILE.open("w", encoding="utf-8") as fp:
        json.dump(cache, fp, ensure_ascii=False, indent=2)
    log(f"Caché geocode guardado ({len(cache)} entradas)")


def main() -> int:
    env = load_env(ENV_FILE)
    api_key = env.get("PUBLIC_GOOGLE_MAPS_API_KEY")
    if not api_key:
        log("ERROR: No se encontró PUBLIC_GOOGLE_MAPS_API_KEY en .env")
        return 1

    canje_dir = CANJE_DIR
    if not canje_dir.exists():
        log(f"ERROR: El directorio {canje_dir} no existe")
        return 1

    files = get_excel_files(canje_dir)
    if not files:
        log("No se encontraron archivos Excel en /canje")
        return 0

    processed = load_processed_files()
    log(f"Archivos ya procesados: {len(processed)}")

    for excel_file in files:
        if excel_file.name in processed:
            log(f"Omitiendo {excel_file.name} (ya procesado)")
            continue

        try:
            results = process_excel(excel_file, api_key)
        except Exception as e:
            log(f"ERROR procesando {excel_file.name}: {e}")
            continue

        if results:
            for filename, pts in results:
                for output_dir in OUTPUT_DIRS:
                    write_json_file(output_dir, filename, pts, excel_file.name)
            processed.add(excel_file.name)
            save_processed_files(processed)
            log(f"Procesado {excel_file.name} ({len(results)} pa\u00edses)")
        else:
            log(f"Aviso: no se generaron puntos para {excel_file.name}")

    log("Proceso completado.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
