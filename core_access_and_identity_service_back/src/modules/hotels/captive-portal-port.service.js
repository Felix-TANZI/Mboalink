const prisma = require('../../config/prisma');

const DEFAULT_PORT_BASE = 3100;
const DEFAULT_PORT_MAX = 3999;
const DEFAULT_PUBLIC_HOST = 'http://13.140.183.51';

function parsePort(value, fallback) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) return fallback;
  return parsed;
}

function getPortRange() {
  const base = parsePort(process.env.CAPTIVE_PORTAL_PORT_BASE, DEFAULT_PORT_BASE);
  const max = parsePort(process.env.CAPTIVE_PORTAL_PORT_MAX, DEFAULT_PORT_MAX);
  if (max < base) {
    throw new Error('CAPTIVE_PORTAL_PORT_MAX must be greater than or equal to CAPTIVE_PORTAL_PORT_BASE');
  }
  return { base, max };
}

function assertPortInRange(port) {
  const { base, max } = getPortRange();
  if (!Number.isInteger(port) || port < base || port > max) {
    const err = new Error(`Captive portal port must be between ${base} and ${max}`);
    err.status = 400;
    throw err;
  }
}

async function allocateCaptivePortalPort(preferredPort, client = prisma) {
  const { base, max } = getPortRange();

  if (preferredPort !== undefined && preferredPort !== null && preferredPort !== '') {
    const port = Number(preferredPort);
    assertPortInRange(port);

    const existing = await client.hotel.findFirst({
      where: { captivePortalPort: port },
      select: { id: true },
    });

    if (existing) {
      const err = new Error(`Captive portal port ${port} is already assigned to another hotel`);
      err.status = 409;
      throw err;
    }

    return port;
  }

  const hotels = await client.hotel.findMany({
    where: { captivePortalPort: { not: null } },
    select: { captivePortalPort: true },
  });
  const usedPorts = new Set(hotels.map((hotel) => hotel.captivePortalPort).filter(Boolean));

  for (let port = base; port <= max; port += 1) {
    if (!usedPorts.has(port)) return port;
  }

  const err = new Error(`No captive portal port available between ${base} and ${max}`);
  err.status = 409;
  throw err;
}

function buildCaptivePortalUrl(port, params = {}) {
  if (!port) return null;

  const rawHost = process.env.CAPTIVE_PORTAL_PUBLIC_HOST || DEFAULT_PUBLIC_HOST;
  const normalizedHost = /^https?:\/\//i.test(rawHost) ? rawHost : `http://${rawHost}`;
  const url = new URL(normalizedHost);
  url.port = String(port);

  if (params.hotelId) url.searchParams.set('hotelId', params.hotelId);
  if (params.ssid) url.searchParams.set('ssid', params.ssid);

  return url.toString();
}

module.exports = {
  allocateCaptivePortalPort,
  buildCaptivePortalUrl,
  getPortRange,
};
