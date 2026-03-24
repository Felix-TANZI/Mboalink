#!/usr/bin/env python3
import json
import os
import random
import sys
import time
from datetime import datetime

import requests

BACKEND_URL = os.getenv("BACKEND_URL", "http://localhost:3000")
AUTH_TOKEN = os.getenv("AUTH_TOKEN")
MAC_ADDRESS = os.getenv("MAC_ADDRESS")
MAC_ADDRESSES = os.getenv("MAC_ADDRESSES")
HOTEL_ID = os.getenv("HOTEL_ID")
DISCOVERY_REFRESH_SECONDS = int(os.getenv("DISCOVERY_REFRESH_SECONDS", "60"))
INTERVAL_SECONDS = int(os.getenv("INTERVAL_SECONDS", "30"))


def require_env():
    missing = []
    if not AUTH_TOKEN:
        missing.append("AUTH_TOKEN")
    if not MAC_ADDRESS and not MAC_ADDRESSES and not HOTEL_ID:
        missing.append("MAC_ADDRESS, MAC_ADDRESSES or HOTEL_ID")
    if missing:
        print(f"Missing env vars: {', '.join(missing)}", file=sys.stderr)
        sys.exit(1)


def headers():
    return {
        "Authorization": f"Bearer {AUTH_TOKEN}",
        "Content-Type": "application/json",
        "Accept": "application/json",
    }


def parse_mac_list():
    if MAC_ADDRESSES:
        return [m.strip() for m in MAC_ADDRESSES.split(",") if m.strip()]
    if HOTEL_ID:
        return list(fetch_macs_from_backend())
    return [MAC_ADDRESS]

def fetch_macs_from_backend():
    url = f"{BACKEND_URL}/api/v1/devices/mac-addresses?hotelId={HOTEL_ID}"
    resp = requests.get(url, headers=headers(), timeout=10)
    resp.raise_for_status()
    data = resp.json()
    return [item["macAddress"] for item in data.get("data", []) if item.get("macAddress")]


def get_device_id(mac_address):
    url = f"{BACKEND_URL}/api/v1/devices/by-mac/{mac_address}"
    resp = requests.get(url, headers=headers(), timeout=10)
    if resp.status_code == 404:
        print(f"Device not found for MAC {mac_address}. Create device first.")
        return None
    resp.raise_for_status()
    data = resp.json()
    return data["data"]["id"]


def collect_metrics():
    # Demo metrics. Replace with real data from equipment or controller.
    return {
        "cpuPercent": round(random.uniform(5, 60), 2),
        "memoryPercent": round(random.uniform(10, 70), 2),
        "temperatureC": round(random.uniform(35, 70), 2),
        "latencyMs": round(random.uniform(1, 50), 2),
        "errorRate": round(random.uniform(0, 1), 3),
        "throughputInKbps": round(random.uniform(1000, 20000), 2),
        "throughputOutKbps": round(random.uniform(500, 10000), 2),
        "capturedAt": datetime.utcnow().isoformat() + "Z",
    }


def post_metrics(device_id, payload):
    url = f"{BACKEND_URL}/api/v1/devices/{device_id}/metrics"
    resp = requests.post(url, headers=headers(), data=json.dumps(payload), timeout=10)
    resp.raise_for_status()


def main():
    require_env()
    last_discovery = 0
    cached_macs = []
    while True:
        now = time.time()
        if HOTEL_ID and (now - last_discovery) >= DISCOVERY_REFRESH_SECONDS:
            try:
                cached_macs = list(fetch_macs_from_backend())
                last_discovery = now
                print(f"Discovered {len(cached_macs)} devices for hotel {HOTEL_ID}")
            except Exception as exc:
                print(f"Failed to refresh device list: {exc}", file=sys.stderr)

        macs = cached_macs if HOTEL_ID else parse_mac_list()
        for mac in macs:
            device_id = get_device_id(mac)
            if not device_id:
                continue
            metrics = collect_metrics()
            try:
                post_metrics(device_id, metrics)
                print(f"Sent metrics for {mac} @ {metrics['capturedAt']}")
            except Exception as exc:
                print(f"Failed to send metrics for {mac}: {exc}", file=sys.stderr)
        time.sleep(INTERVAL_SECONDS)


if __name__ == "__main__":
    main()
