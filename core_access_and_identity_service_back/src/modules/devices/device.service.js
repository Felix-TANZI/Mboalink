const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');

function scopedHotelId(queryHotelId, user) {
  if (user?.role === 'RECEPTIONIST' || user?.role === 'HOTEL_IT') {
    if (!user.hotelId) {
      const err = new Error('Hotel-scoped account is not linked to a hotel');
      err.status = 403;
      throw err;
    }
    return user.hotelId;
  }

  return queryHotelId || undefined;
}

function ensureCanAccessHotel(hotelId, user) {
  if (user?.role !== 'RECEPTIONIST' && user?.role !== 'HOTEL_IT') return;

  if (!user.hotelId || user.hotelId !== hotelId) {
    const err = new Error('Hotel-scoped account cannot access another hotel');
    err.status = 403;
    throw err;
  }
}

async function listDevices(query, user) {
  return prisma.device.findMany({
    where: {
      hotelId: scopedHotelId(query.hotelId, user),
      status: query.status || undefined,
      macAddress: query.macAddress ? { equals: query.macAddress } : undefined,
      OR: query.search ? [
        { macAddress: { contains: query.search, mode: 'insensitive' } },
        { model: { contains: query.search, mode: 'insensitive' } },
        { serialNumber: { contains: query.search, mode: 'insensitive' } },
      ] : undefined,
    },
    include: {
      hotel: { select: { id: true, name: true } },
    },
    orderBy: { updatedAt: 'desc' },
  });
}

async function listDeviceMacAddresses(query, user) {
  return prisma.device.findMany({
    where: {
      hotelId: scopedHotelId(query.hotelId, user),
      status: query.status || undefined,
      macAddress: { not: null },
    },
    select: {
      id: true,
      macAddress: true,
      hotelId: true,
      status: true,
    },
    orderBy: { updatedAt: 'desc' },
  });
}

async function getDeviceByMac(macAddress, user) {
  const device = await prisma.device.findUnique({
    where: { macAddress },
    include: { hotel: { select: { id: true, name: true } } },
  });

  if (!device) {
    const err = new Error('Device not found');
    err.status = 404;
    throw err;
  }
  ensureCanAccessHotel(device.hotelId, user);

  return device;
}

async function createDevice(payload, reqMeta) {
  const hotel = await prisma.hotel.findUnique({ where: { id: payload.hotelId } });
  if (!hotel) {
    const err = new Error('Hotel not found');
    err.status = 404;
    throw err;
  }

  const device = await prisma.device.create({
    data: {
      ...payload,
      installedAt: payload.installedAt ? new Date(payload.installedAt) : undefined,
    },
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'device.lifecycle',
    entityType: 'device',
    entityId: device.id,
    action: 'create',
    actorUserId: reqMeta.actorUserId,
    hotelId: payload.hotelId,
    payload: {
      macAddress: payload.macAddress,
      model: payload.model,
      zone: payload.zone,
    },
  });

  return device;
}

async function updateDevice(deviceId, payload, reqMeta) {
  const existing = await prisma.device.findUnique({ where: { id: deviceId } });
  if (!existing) {
    const err = new Error('Device not found');
    err.status = 404;
    throw err;
  }

  const device = await prisma.device.update({
    where: { id: deviceId },
    data: payload,
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'device.lifecycle',
    entityType: 'device',
    entityId: device.id,
    action: 'update',
    actorUserId: reqMeta.actorUserId,
    hotelId: device.hotelId,
    payload,
  });

  return device;
}

async function restartDevice(deviceId, reqMeta) {
  const existing = await prisma.device.findUnique({ where: { id: deviceId } });
  if (!existing) {
    const err = new Error('Device not found');
    err.status = 404;
    throw err;
  }

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'device.command',
    entityType: 'device',
    entityId: deviceId,
    action: 'restart',
    actorUserId: reqMeta.actorUserId,
    hotelId: existing.hotelId,
    payload: {
      mode: 'remote',
    },
    severity: 'WARNING',
  });

  return {
    accepted: true,
    command: 'restart',
    deviceId,
    requestedAt: new Date().toISOString(),
  };
}

async function addMetric(deviceId, payload, reqMeta) {
  const existing = await prisma.device.findUnique({ where: { id: deviceId } });
  if (!existing) {
    const err = new Error('Device not found');
    err.status = 404;
    throw err;
  }

  const metric = await prisma.deviceMetric.create({
    data: {
      deviceId,
      ...payload,
      capturedAt: payload.capturedAt ? new Date(payload.capturedAt) : undefined,
    },
  });

  await prisma.device.update({
    where: { id: deviceId },
    data: {
      status: 'ONLINE',
      lastHeartbeatAt: metric.capturedAt,
      clientsConnected: metric.throughputInKbps ? Math.max(existing.clientsConnected, 1) : existing.clientsConnected,
    },
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'device.metric',
    entityType: 'device_metric',
    entityId: metric.id,
    action: 'ingest',
    actorUserId: reqMeta.actorUserId,
    hotelId: existing.hotelId,
    payload,
  });

  return metric;
}

async function listMetrics(deviceId, query, user) {
  const device = await prisma.device.findUnique({ where: { id: deviceId } });
  if (!device) {
    const err = new Error('Device not found');
    err.status = 404;
    throw err;
  }
  ensureCanAccessHotel(device.hotelId, user);

  const take = Math.min(Number(query.limit || 100), 1000);

  return prisma.deviceMetric.findMany({
    where: { deviceId },
    orderBy: { capturedAt: 'desc' },
    take,
  });
}

module.exports = {
  listDevices,
  listDeviceMacAddresses,
  getDeviceByMac,
  createDevice,
  updateDevice,
  restartDevice,
  addMetric,
  listMetrics,
};
