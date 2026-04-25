const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');
const {
  syncGuestPassToRadius,
  removeGuestPassFromRadius,
} = require('../radius/radius.service');

function randomCode(size = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let out = '';
  for (let i = 0; i < size; i += 1) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

function computeExpiry(payload) {
  if (payload.expiryDate) {
    const dateString = `${payload.expiryDate}T${payload.expiryTime || '00:00'}:00.000Z`;
    return new Date(dateString);
  }

  if (payload.durationValue && payload.durationValue > 0) {
    const now = Date.now();
    const multiplier = payload.durationUnit === 'Days' ? 24 * 60 * 60 * 1000 : 60 * 60 * 1000;
    return new Date(now + (payload.durationValue * multiplier));
  }

  return null;
}

async function ensureHotel(hotelId) {
  const hotel = await prisma.hotel.findUnique({ where: { id: hotelId } });
  if (!hotel) {
    const err = new Error('Hotel not found');
    err.status = 404;
    throw err;
  }
  return hotel;
}

async function listGuestPasses(query) {
  const where = {
    hotelId: query.hotelId || undefined,
    isRevoked: query.isRevoked ? query.isRevoked === 'true' : undefined,
    OR: query.search ? [
      { code: { contains: query.search, mode: 'insensitive' } },
      { label: { contains: query.search, mode: 'insensitive' } },
    ] : undefined,
  };

  return prisma.guestPass.findMany({
    where,
    include: {
      hotel: { select: { id: true, name: true } },
      room: { select: { id: true, name: true, type: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
}

async function createGuestPass(payload, reqMeta) {
  await ensureHotel(payload.hotelId);
  if (payload.roomId) {
    const room = await prisma.room.findUnique({ where: { id: payload.roomId } });
    if (!room || room.hotelId !== payload.hotelId) {
      const err = new Error('Room not found in selected hotel');
      err.status = 404;
      throw err;
    }
  }

  const code = payload.code || randomCode();
  const guestPass = await prisma.guestPass.create({
    data: {
      hotelId: payload.hotelId,
      roomId: payload.roomId || null,
      code,
      label: payload.label,
      clientName: payload.clientName || null,
      durationValue: payload.durationValue,
      durationUnit: payload.durationUnit,
      maxUses: payload.maxUses,
      expiryAt: computeExpiry(payload),
      uploadCapKbps: payload.uploadCapKbps,
      downloadCapKbps: payload.downloadCapKbps,
      zones: payload.zones || [],
    },
  });

  await syncGuestPassToRadius(guestPass.id, reqMeta);

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'wifi.guest-pass',
    entityType: 'guest_pass',
    entityId: guestPass.id,
    action: 'create',
    actorUserId: reqMeta.actorUserId,
    hotelId: payload.hotelId,
    payload: {
      code: guestPass.code,
      roomId: guestPass.roomId,
      clientName: guestPass.clientName,
      maxUses: guestPass.maxUses,
      expiryAt: guestPass.expiryAt,
    },
  });

  return guestPass;
}

async function createGuestPassesBulk(payload, reqMeta) {
  await ensureHotel(payload.hotelId);
  if (payload.roomId) {
    const room = await prisma.room.findUnique({ where: { id: payload.roomId } });
    if (!room || room.hotelId !== payload.hotelId) {
      const err = new Error('Room not found in selected hotel');
      err.status = 404;
      throw err;
    }
  }

  const entries = Array.from({ length: payload.quantity }).map((_, index) => {
    const suffix = String(index + 1).padStart(3, '0');
    const rawCode = payload.codePrefix ? `${payload.codePrefix}${suffix}` : randomCode();
    return {
      hotelId: payload.hotelId,
      roomId: payload.roomId || null,
      code: rawCode,
      label: payload.label ? `${payload.label}-${suffix}` : undefined,
      clientName: payload.clientName || null,
      durationValue: payload.durationValue,
      durationUnit: payload.durationUnit,
      maxUses: payload.maxUses,
      expiryAt: computeExpiry(payload),
      uploadCapKbps: payload.uploadCapKbps,
      downloadCapKbps: payload.downloadCapKbps,
      zones: payload.zones || [],
    };
  });

  const created = [];
  for (const entry of entries) {
    // Sequential to keep code uniqueness handling deterministic.
    // Can be optimized with retries + createMany in a later iteration.
    // eslint-disable-next-line no-await-in-loop
    const row = await prisma.guestPass.create({ data: entry });
    // eslint-disable-next-line no-await-in-loop
    await syncGuestPassToRadius(row.id, reqMeta);
    created.push(row);
  }

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'wifi.guest-pass',
    entityType: 'guest_pass',
    action: 'bulk-create',
    actorUserId: reqMeta.actorUserId,
    hotelId: payload.hotelId,
    payload: {
      quantity: payload.quantity,
      label: payload.label,
      roomId: payload.roomId || null,
      clientName: payload.clientName || null,
      durationValue: payload.durationValue,
      durationUnit: payload.durationUnit,
    },
  });

  return created;
}

async function revokeGuestPass(passId, reqMeta) {
  const existing = await prisma.guestPass.findUnique({ where: { id: passId } });
  if (!existing) {
    const err = new Error('Guest pass not found');
    err.status = 404;
    throw err;
  }

  const pass = await prisma.guestPass.update({
    where: { id: passId },
    data: { isRevoked: true },
  });

  await syncGuestPassToRadius(pass.id, reqMeta);

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'wifi.guest-pass',
    entityType: 'guest_pass',
    entityId: pass.id,
    action: 'revoke',
    actorUserId: reqMeta.actorUserId,
    hotelId: pass.hotelId,
    payload: { code: pass.code },
    severity: 'WARNING',
  });

  return pass;
}

async function deleteGuestPass(passId, reqMeta) {
  const existing = await prisma.guestPass.findUnique({ where: { id: passId } });
  if (!existing) {
    const err = new Error('Guest pass not found');
    err.status = 404;
    throw err;
  }

  await prisma.guestPass.delete({ where: { id: passId } });
  await removeGuestPassFromRadius(existing);

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'wifi.guest-pass',
    entityType: 'guest_pass',
    entityId: passId,
    action: 'delete',
    actorUserId: reqMeta.actorUserId,
    hotelId: existing.hotelId,
    payload: { code: existing.code },
    severity: 'WARNING',
  });
}

module.exports = {
  listGuestPasses,
  createGuestPass,
  createGuestPassesBulk,
  revokeGuestPass,
  deleteGuestPass,
};
