#!/usr/bin/env node
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000';
const AUTH_TOKEN = process.env.AUTH_TOKEN;
const MAC_ADDRESS = process.env.MAC_ADDRESS;
const MAC_ADDRESSES = process.env.MAC_ADDRESSES;
const HOTEL_ID = process.env.HOTEL_ID;
const DISCOVERY_REFRESH_SECONDS = Number(process.env.DISCOVERY_REFRESH_SECONDS || 60);
const INTERVAL_SECONDS = Number(process.env.INTERVAL_SECONDS || 30);

function requireEnv() {
  const missing = [];
  if (!AUTH_TOKEN) missing.push('AUTH_TOKEN');
  if (!MAC_ADDRESS && !MAC_ADDRESSES && !HOTEL_ID) missing.push('MAC_ADDRESS, MAC_ADDRESSES or HOTEL_ID');
  if (missing.length) {
    console.error(`Missing env vars: ${missing.join(', ')}`);
    process.exit(1);
  }
}

function headers() {
  return {
    Authorization: `Bearer ${AUTH_TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
}

function parseMacList() {
  if (MAC_ADDRESSES) {
    return MAC_ADDRESSES.split(',').map((m) => m.trim()).filter(Boolean);
  }
  if (HOTEL_ID) {
    return [];
  }
  return [MAC_ADDRESS];
}

async function getDeviceId(macAddress) {
  const url = `${BACKEND_URL}/api/v1/devices/by-mac/${macAddress}`;
  const res = await fetch(url, { headers: headers() });
  if (res.status === 404) {
    console.error(`Device not found for MAC ${macAddress}. Create device first.`);
    return null;
  }
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Device lookup failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  return data.data.id;
}

async function fetchMacsFromBackend() {
  const url = `${BACKEND_URL}/api/v1/devices/mac-addresses?hotelId=${HOTEL_ID}`;
  const res = await fetch(url, { headers: headers() });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Device list failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  return (data.data || []).map((item) => item.macAddress).filter(Boolean);
}

function collectMetrics() {
  // Demo metrics. Replace with real data from equipment or controller.
  const now = new Date().toISOString();
  return {
    cpuPercent: Number((Math.random() * 55 + 5).toFixed(2)),
    memoryPercent: Number((Math.random() * 60 + 10).toFixed(2)),
    temperatureC: Number((Math.random() * 35 + 35).toFixed(2)),
    latencyMs: Number((Math.random() * 49 + 1).toFixed(2)),
    errorRate: Number((Math.random() * 1).toFixed(3)),
    throughputInKbps: Number((Math.random() * 19000 + 1000).toFixed(2)),
    throughputOutKbps: Number((Math.random() * 9500 + 500).toFixed(2)),
    capturedAt: now,
  };
}

async function postMetrics(deviceId, payload) {
  const url = `${BACKEND_URL}/api/v1/devices/${deviceId}/metrics`;
  const res = await fetch(url, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Metrics post failed: ${res.status} ${text}`);
  }
}

async function main() {
  requireEnv();
  let cachedMacs = [];
  let lastDiscovery = 0;

  setInterval(async () => {
    const now = Date.now();
    if (HOTEL_ID && (now - lastDiscovery) >= DISCOVERY_REFRESH_SECONDS * 1000) {
      try {
        cachedMacs = await fetchMacsFromBackend();
        lastDiscovery = now;
        console.log(`Discovered ${cachedMacs.length} devices for hotel ${HOTEL_ID}`);
      } catch (err) {
        console.error(`Failed to refresh device list: ${err.message}`);
      }
    }

    const macs = HOTEL_ID ? cachedMacs : parseMacList();
    for (const mac of macs) {
      const deviceId = await getDeviceId(mac);
      if (!deviceId) continue;
      const metrics = collectMetrics();
      try {
        await postMetrics(deviceId, metrics);
        console.log(`Sent metrics for ${mac} @ ${metrics.capturedAt}`);
      } catch (err) {
        console.error(`Failed to send metrics for ${mac}: ${err.message}`);
      }
    }
  }, INTERVAL_SECONDS * 1000);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
