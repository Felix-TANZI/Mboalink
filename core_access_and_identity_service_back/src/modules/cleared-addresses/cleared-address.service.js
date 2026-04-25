const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');
const {
  syncClearedAddressToRadius,
  removeClearedAddressFromRadius,
} = require('../radius/radius.service');

async function listClearedAddresses(query) {
  const where = {
    hotelId: query.hotelId || undefined,
    OR: query.search ? [
      { address: { contains: query.search, mode: 'insensitive' } },
      { issuedBy: { contains: query.search, mode: 'insensitive' } },
      { connectionType: { contains: query.search, mode: 'insensitive' } },
    ] : undefined,
  };

  return prisma.clearedAddress.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });
}

async function createClearedAddress(payload, reqMeta) {
  const hotel = await prisma.hotel.findUnique({ where: { id: payload.hotelId } });
  if (!hotel) {
    const err = new Error('Hotel not found');
    err.status = 404;
    throw err;
  }

  const row = await prisma.clearedAddress.create({
    data: {
      ...payload,
      expiresAt: new Date(payload.expiresAt),
      issuedBy: reqMeta.actorName,
    },
  });

  await syncClearedAddressToRadius(row.id, reqMeta);

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'wifi.whitelist',
    entityType: 'cleared_address',
    entityId: row.id,
    action: 'create',
    actorUserId: reqMeta.actorUserId,
    hotelId: payload.hotelId,
    payload: {
      address: payload.address,
      expiresAt: payload.expiresAt,
      uploadCapKbps: payload.uploadCapKbps,
      downloadCapKbps: payload.downloadCapKbps,
    },
  });

  return row;
}

async function deleteClearedAddresses(ids, reqMeta) {
  const rows = await prisma.clearedAddress.findMany({ where: { id: { in: ids } } });

  if (rows.length === 0) {
    return { count: 0 };
  }

  await prisma.clearedAddress.deleteMany({ where: { id: { in: ids } } });
  for (const row of rows) {
    // eslint-disable-next-line no-await-in-loop
    await removeClearedAddressFromRadius(row);
  }

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'wifi.whitelist',
    entityType: 'cleared_address',
    action: 'bulk-delete',
    actorUserId: reqMeta.actorUserId,
    hotelId: rows[0].hotelId,
    payload: {
      ids,
      count: rows.length,
    },
    severity: 'WARNING',
  });

  return { count: rows.length };
}

module.exports = {
  listClearedAddresses,
  createClearedAddress,
  deleteClearedAddresses,
};
