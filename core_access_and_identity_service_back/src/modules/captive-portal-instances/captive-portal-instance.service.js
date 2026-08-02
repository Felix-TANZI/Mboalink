const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');
const { allocateCaptivePortalPort, buildCaptivePortalUrl } = require('../hotels/captive-portal-port.service');

function normalizeText(value) {
  return String(value || '').trim();
}

function normalizeSsid(value) {
  return normalizeText(value).replace(/\s+/g, ' ');
}

function defaultSsidForHotel(hotel) {
  return `${normalizeText(hotel.name).toUpperCase().replace(/[^A-Z0-9]+/g, ' ').trim()} CLIENT`.trim();
}

function ensureCanManageHotel(hotelId, reqMetaOrUser = {}) {
  const role = reqMetaOrUser.actorRole || reqMetaOrUser.role;
  const scopedHotel = reqMetaOrUser.actorHotelId || reqMetaOrUser.hotelId;

  if (role !== 'HOTEL_IT') return;

  if (!scopedHotel || scopedHotel !== hotelId) {
    const err = new Error('Hotel IT cannot manage captive portals for another establishment');
    err.status = 403;
    throw err;
  }
}

function withPortalUrl(portal) {
  return {
    ...portal,
    captivePortalUrl: buildCaptivePortalUrl(portal.port, {
      portalId: portal.id,
      hotelId: portal.hotelId,
      ssid: portal.ssid,
    }),
  };
}

async function getHotelOrThrow(hotelId) {
  const hotel = await prisma.hotel.findUnique({ where: { id: hotelId } });
  if (!hotel) {
    const err = new Error('Hotel not found');
    err.status = 404;
    throw err;
  }
  return hotel;
}

async function listCaptivePortals(hotelId, user) {
  ensureCanManageHotel(hotelId, user || {});
  await getHotelOrThrow(hotelId);

  const portals = await prisma.captivePortalInstance.findMany({
    where: { hotelId },
    orderBy: [{ isDefault: 'desc' }, { createdAt: 'asc' }],
  });

  return portals.map(withPortalUrl);
}

async function ensureDefaultCaptivePortal(hotelId, options = {}) {
  const hotel = await getHotelOrThrow(hotelId);
  const existingDefault = await prisma.captivePortalInstance.findFirst({
    where: { hotelId, isDefault: true },
    orderBy: { createdAt: 'asc' },
  });

  if (existingDefault) return withPortalUrl(existingDefault);

  const port = hotel.captivePortalPort || await allocateCaptivePortalPort();
  const ssid = normalizeSsid(options.ssid) || defaultSsidForHotel(hotel);

  const portal = await prisma.captivePortalInstance.create({
    data: {
      hotelId,
      name: options.name || 'Client',
      ssid,
      port,
      status: 'ACTIVE',
      isDefault: true,
    },
  });

  if (!hotel.captivePortalPort) {
    await prisma.hotel.update({ where: { id: hotelId }, data: { captivePortalPort: port } });
  }

  return withPortalUrl(portal);
}

async function createCaptivePortal(hotelId, data, reqMeta) {
  ensureCanManageHotel(hotelId, reqMeta);
  await getHotelOrThrow(hotelId);

  const port = await allocateCaptivePortalPort();
  const portal = await prisma.captivePortalInstance.create({
    data: {
      hotelId,
      name: normalizeText(data.name) || 'Client',
      ssid: normalizeSsid(data.ssid),
      port,
      status: data.status || 'ACTIVE',
      isDefault: false,
    },
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'captive.portal',
    entityType: 'captive_portal',
    entityId: portal.id,
    action: 'create',
    actorUserId: reqMeta.actorUserId,
    hotelId,
    payload: { name: portal.name, ssid: portal.ssid, port: portal.port },
  });

  return withPortalUrl(portal);
}

async function updateCaptivePortal(hotelId, portalId, data, reqMeta) {
  ensureCanManageHotel(hotelId, reqMeta);
  const existing = await prisma.captivePortalInstance.findFirst({ where: { id: portalId, hotelId } });
  if (!existing) {
    const err = new Error('Captive portal not found');
    err.status = 404;
    throw err;
  }

  const nextData = {
    name: data.name !== undefined ? normalizeText(data.name) : undefined,
    ssid: data.ssid !== undefined ? normalizeSsid(data.ssid) : undefined,
    status: data.status || undefined,
  };

  Object.keys(nextData).forEach((key) => nextData[key] === undefined && delete nextData[key]);

  const portal = await prisma.captivePortalInstance.update({
    where: { id: portalId },
    data: nextData,
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'captive.portal',
    entityType: 'captive_portal',
    entityId: portal.id,
    action: 'update',
    actorUserId: reqMeta.actorUserId,
    hotelId,
    payload: nextData,
  });

  return withPortalUrl(portal);
}

async function deleteCaptivePortal(hotelId, portalId, reqMeta) {
  ensureCanManageHotel(hotelId, reqMeta);
  const existing = await prisma.captivePortalInstance.findFirst({ where: { id: portalId, hotelId } });
  if (!existing) {
    const err = new Error('Captive portal not found');
    err.status = 404;
    throw err;
  }
  if (existing.isDefault) {
    const err = new Error('Default captive portal cannot be deleted');
    err.status = 400;
    throw err;
  }

  await prisma.captivePortalInstance.delete({ where: { id: portalId } });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'captive.portal',
    entityType: 'captive_portal',
    entityId: existing.id,
    action: 'delete',
    actorUserId: reqMeta.actorUserId,
    hotelId,
    payload: { name: existing.name, ssid: existing.ssid, port: existing.port },
    severity: 'WARNING',
  });

  return { deleted: true };
}

module.exports = {
  createCaptivePortal,
  deleteCaptivePortal,
  ensureDefaultCaptivePortal,
  listCaptivePortals,
  updateCaptivePortal,
  withPortalUrl,
};
