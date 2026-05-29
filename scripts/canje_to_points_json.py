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
    "direccion": ["direccion", "dirección", "address", "direccion completa", "ubicacion"],
    "latitud": ["latitud", "latitude", "lat"],
    "longitud": ["longitud", "longitude", "long"]
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
    return files


def build_geocode_url(params: Dict[str, str]) -> str:
    return f"{GOOGLE_GEOCODE_BASE}?{urlencode(params)}"


def call_geocode_api(params: Dict[str, str]) -> Dict[str, Any]:
    url = build_geocode_url(params)
    context = ssl.create_default_context(cafile=certifi.where())
    try:
        with urlopen(url, timeout=30, context=context) as response:
            raw = response.read().decode("utf-8")
            return json.loads(raw)
    except HTTPError as exc:
        raise RuntimeError(f"HTTP error al llamar a la API de geocodificación: {exc.code} {exc.reason}")
    except URLError as exc:
        raise RuntimeError(f"Error de red al llamar a la API de geocodificación: {exc}")


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


def resolve_location(
    row: pd.Series,
    address_col: Optional[str],
    lat_col: Optional[str],
    lng_col: Optional[str],
    api_key: str,
    cache: Dict[str, Dict[str, Any]],
) -> Dict[str, Optional[str]]:
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
        return {"pais": None, "departamento": None, "ciudad": None, "direccion": None, "latitud": None, "longitud": None}

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
    else:
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

    location_info = extract_location_data(result) if result else {"pais": None, "departamento": None, "ciudad": None}
    return {
        "pais": location_info.get("pais"),
        "departamento": location_info.get("departamento"),
        "ciudad": location_info.get("ciudad"),
        "direccion": address_value,
        "latitud": lat_value,
        "longitud": lng_value,
    }


def detect_header_row(path: Path) -> int:
    """Encuentra la fila donde están los encabezados (0-indexed)."""
    df_raw = pd.read_excel(path, header=None, nrows=10, dtype=str)
    for i in range(min(10, len(df_raw))):
        row = [str(v).strip() for v in df_raw.iloc[i] if pd.notna(v)]
        if any(normalize_header(c) in {normalize_header(a) for a in COLUMN_ALIASES["direccion"]} for c in row):
            return i
    return 0


def process_excel(path: Path, api_key: str) -> List[Tuple[str, List[Dict[str, Optional[str]]]]]:
    log(f"Procesando {path.name}...")
    header_row = detect_header_row(path)
    df = pd.read_excel(path, header=header_row, dtype=str)
    if df.empty:
        log(f"  Aviso: archivo vacío {path.name}")
        return []

    header = list(df.columns)
    address_col = find_column(header, COLUMN_ALIASES["direccion"])
    lat_col = find_column(header, COLUMN_ALIASES["latitud"])
    lng_col = find_column(header, COLUMN_ALIASES["longitud"])

    if not address_col and (not lat_col or not lng_col):
        log(f"  ERROR: no se encontró columna Direccion ni columnas Latitud/Longitud en {path.name}")
        return []

    cache: Dict[str, Dict[str, Any]] = {}
    country_points: Dict[str, List[Dict[str, Optional[str]]]] = {}

    for _, row in df.iterrows():
        try:
            point = resolve_location(row, address_col, lat_col, lng_col, api_key, cache)
        except Exception as e:
            log(f"  Error geocodificando fila en {path.name}: {e}")
            continue
        if point["latitud"] is None or point["longitud"] is None:
            log(f"  Aviso: fila con datos incompletos en {path.name}")
        pais = point.get("pais") or "unknown"
        country_points.setdefault(pais, []).append(point)

    results = []
    for pais, pts in country_points.items():
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
            log(f"  Sin puntos nuevos para {filename}, omitiendo")
            return
        merged = existing_points + new_points
        sources = sorted({s for s in [existing_source, source] if s})
        payload = {"source": "; ".join(sources), "points": merged}
    else:
        payload = {"source": source, "points": data}

    with target_file.open("w", encoding="utf-8") as fp:
        json.dump(payload, fp, ensure_ascii=False, indent=2)
    label = "Actualizado" if existing_points else "Generado"
    print(f"  {label} {target_file} ({len(payload['points'])} puntos)")


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
