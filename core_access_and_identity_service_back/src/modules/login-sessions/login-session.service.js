const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');
const { syncRoomToRadius, syncGuestPassToRadius } = require('../radius/radius.service');

function randomWifiCode(size = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let out = '';
  for (let i = 0; i < size; i += 1) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

async function uniqueWifiCode() {
  for (let attempt = 0; attempt < 10; attempt += 1) {
    const code = randomWifiCode();
    // eslint-disable-next-line no-await-in-loop
    const exists = await prisma.guestPass.findUnique({ where: { code } });
    if (!exists) return code;
  }
  return `${randomWifiCode(8)}${Date.now().toString(36).slice(-2)}`;
}

async function listLoginSessions(query) {
  const where = {
    hotelId: query.hotelId || undefined,
    status:  query.status  || undefined,
    OR: query.search ? [
      { clientName: { contains: query.search, mode: 'insensitive' } },
      { ipAddress:  { contains: query.search, mode: 'insensitive' } },
      { macAddress: { contains: query.search, mode: 'insensitive' } },
      { type:       { contains: query.search, mode: 'insensitive' } },
      { room: { type: { contains: query.search, mode: 'insensitive' } } },
    ] : undefined,
  };

  return prisma.loginSession.findMany({
    where,
    include: {
      hotel:     { select: { id: true, name: true } },
      room:      { select: { id: true, type: true, name: true } },
      guestPass: { select: { id: true, code: true, label: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
}

async function createManualLogin(payload, reqMeta) {
  let room = null;

  if (payload.roomId) {
    room = await prisma.room.findUnique({ where: { id: payload.roomId } });
    if (!room || room.hotelId !== payload.hotelId) {
      const err = new Error('Room not found in selected hotel');
      err.status = 404;
      throw err;
    }
  } else {
    const roomNumber = String(payload.roomNumber || '').trim();
    room = await prisma.room.findFirst({
      where: {
        hotelId: payload.hotelId,
        name: { equals: roomNumber, mode: 'insensitive' },
      },
    });

    if (!room) {
      room = await prisma.room.create({
        data: {
          hotelId: payload.hotelId,
          name: roomNumber,
          type: 'Chambre non classée',
          capacity: 1,
          description: 'Créée automatiquement depuis le check-in manuel.',
          equipments: [],
          photos: [],
        },
      });
      await syncRoomToRadius(room.id, reqMeta);
    }
  }

  // Vérification cohérence des dates
  const startedAt = new Date(payload.startedAt);
  const endedAt   = new Date(payload.endedAt);
  if (endedAt <= startedAt) {
    const err = new Error('La date de sortie doit être après la date d\'entrée');
    err.status = 400;
    throw err;
  }

  const wifiConfig = await prisma.wifiConfig.findUnique({ where: { hotelId: payload.hotelId } });
  const guestPass = await prisma.guestPass.create({
    data: {
      hotelId: payload.hotelId,
      roomId: room.id,
      code: await uniqueWifiCode(),
      label: `Manual Login - Chambre ${room.name || room.type}`,
      clientName: payload.clientName,
      maxUses: 0,
      expiryAt: endedAt,
      uploadCapKbps: wifiConfig?.uploadSpeedKbps || 1500,
      downloadCapKbps: wifiConfig?.downloadSpeedKbps || 1500,
      zones: wifiConfig?.zones || [],
    },
  });

  await syncGuestPassToRadius(guestPass.id, reqMeta);

  const session = await prisma.loginSession.create({
    data: {
      hotelId:     payload.hotelId,
      roomId:      room.id,
      guestPassId: guestPass.id,
      clientName:  payload.clientName,
      ipAddress:   payload.ipAddress,
      macAddress:  payload.macAddress,
      status:      'ONLINE',
      startedAt,
      endedAt,
      capDownKbps: guestPass.downloadCapKbps,
      capUpKbps:   guestPass.uploadCapKbps,
      type: 'Manual Login',
    },
    include: {
      room:      { select: { id: true, type: true, name: true } },
      guestPass: { select: { id: true, code: true, label: true } },
    },
  });

  await writeAuditLog({
    requestId:   reqMeta.requestId,
    eventType:   'wifi.session',
    entityType:  'login_session',
    entityId:    session.id,
    action:      'manual-login',
    actorUserId: reqMeta.actorUserId,
    hotelId:     payload.hotelId,
    payload: {
      roomId:     room.id,
      roomNumber: payload.roomNumber || null,
      clientName: payload.clientName || null,
      guestPassId: guestPass.id,
      code: guestPass.code,
      startedAt:  payload.startedAt,
      endedAt:    payload.endedAt,
    },
  });

  return session;
}

async function updateLoginSession(sessionId, payload, reqMeta) {
  const existing = await prisma.loginSession.findUnique({ where: { id: sessionId } });
  if (!existing) {
    const err = new Error('Session not found');
    err.status = 404;
    throw err;
  }

  // Si on change la chambre, vérifier qu'elle appartient au même hôtel
  if (payload.roomId) {
    const room = await prisma.room.findUnique({ where: { id: payload.roomId } });
    if (!room || room.hotelId !== existing.hotelId) {
      const err = new Error('Room not found in hotel');
      err.status = 404;
      throw err;
    }
  }

  // Vérification cohérence des dates si les deux sont fournies
  const startedAt = payload.startedAt ? new Date(payload.startedAt) : existing.startedAt;
  const endedAt   = payload.endedAt   ? new Date(payload.endedAt)   : existing.endedAt;
  if (startedAt && endedAt && endedAt <= startedAt) {
    const err = new Error('La date de sortie doit être après la date d\'entrée');
    err.status = 400;
    throw err;
  }

  const updated = await prisma.loginSession.update({
    where: { id: sessionId },
    data: {
      ...(payload.clientName && { clientName: payload.clientName }),
      ...(payload.roomId     && { roomId:     payload.roomId }),
      ...(payload.startedAt  && { startedAt:  new Date(payload.startedAt) }),
      ...(payload.endedAt    && { endedAt:    new Date(payload.endedAt) }),
    },
    include: {
      room:      { select: { id: true, type: true, name: true } },
      guestPass: { select: { id: true, code: true, label: true } },
    },
  });

  await writeAuditLog({
    requestId:   reqMeta.requestId,
    eventType:   'wifi.session',
    entityType:  'login_session',
    entityId:    sessionId,
    action:      'update',
    actorUserId: reqMeta.actorUserId,
    hotelId:     existing.hotelId,
    payload,
  });

  return updated;
}

async function removeSessions(ids, reqMeta) {
  const sessions = await prisma.loginSession.findMany({ where: { id: { in: ids } } });
  if (sessions.length === 0) return { count: 0 };

  await prisma.loginSession.deleteMany({ where: { id: { in: ids } } });

  await writeAuditLog({
    requestId:   reqMeta.requestId,
    eventType:   'wifi.session',
    entityType:  'login_session',
    action:      'bulk-remove',
    actorUserId: reqMeta.actorUserId,
    hotelId:     sessions[0].hotelId,
    payload:     { ids, count: sessions.length },
    severity:    'WARNING',
  });

  return { count: sessions.length };
}

module.exports = {
  listLoginSessions,
  createManualLogin,
  updateLoginSession,
  removeSessions,
};
