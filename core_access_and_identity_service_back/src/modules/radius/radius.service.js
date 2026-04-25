const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');

function normalizeRadiusUsername(value) {
  return String(value || '')
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9#_-]/g, '-')
    .slice(0, 64);
}

function secondsFromGuestPass(pass) {
  if (pass.expiryAt) {
    return Math.max(0, Math.floor((new Date(pass.expiryAt).getTime() - Date.now()) / 1000));
  }

  if (!pass.durationValue || pass.durationValue <= 0) {
    return null;
  }

  const hours = pass.durationUnit === 'Days'
    ? pass.durationValue * 24
    : pass.durationValue;

  return hours * 60 * 60;
}

function radiusRepliesForAccess({ sessionTimeout, uploadKbps, downloadKbps, message }) {
  const replies = [];

  if (sessionTimeout && sessionTimeout > 0) {
    replies.push({ attribute: 'Session-Timeout', op: ':=', value: String(sessionTimeout) });
  }

  if (uploadKbps && uploadKbps > 0) {
    replies.push({ attribute: 'WISPr-Bandwidth-Max-Up', op: ':=', value: String(uploadKbps * 1000) });
  }

  if (downloadKbps && downloadKbps > 0) {
    replies.push({ attribute: 'WISPr-Bandwidth-Max-Down', op: ':=', value: String(downloadKbps * 1000) });
  }

  if (message) {
    replies.push({ attribute: 'Reply-Message', op: ':=', value: message.slice(0, 253) });
  }

  return replies;
}

async function replaceRadiusUser(username, checks, replies) {
  await prisma.$transaction([
    prisma.radCheck.deleteMany({ where: { username } }),
    prisma.radReply.deleteMany({ where: { username } }),
    ...(checks.length ? [prisma.radCheck.createMany({ data: checks.map((row) => ({ username, ...row })) })] : []),
    ...(replies.length ? [prisma.radReply.createMany({ data: replies.map((row) => ({ username, ...row })) })] : []),
  ]);
}

async function removeRadiusUser(username) {
  await prisma.$transaction([
    prisma.radCheck.deleteMany({ where: { username } }),
    prisma.radReply.deleteMany({ where: { username } }),
  ]);
}

async function syncGuestPassToRadius(passId, reqMeta = {}) {
  const pass = await prisma.guestPass.findUnique({
    where: { id: passId },
    include: {
      hotel: { select: { id: true, name: true } },
      room: { select: { id: true, name: true, type: true } },
    },
  });

  if (!pass) return null;

  const username = normalizeRadiusUsername(pass.code);
  const sessionTimeout = secondsFromGuestPass(pass);
  const expired = sessionTimeout === 0;

  if (pass.isRevoked || expired) {
    await removeRadiusUser(username);
    return { username, status: 'removed' };
  }

  const roomLabel = pass.room?.name || pass.room?.type;
  const message = [
    pass.hotel?.name,
    roomLabel ? `Chambre ${roomLabel}` : null,
    pass.clientName || null,
  ].filter(Boolean).join(' - ');

  await replaceRadiusUser(
    username,
    [
      { attribute: 'Cleartext-Password', op: ':=', value: pass.code },
    ],
    radiusRepliesForAccess({
      sessionTimeout,
      uploadKbps: pass.uploadCapKbps,
      downloadKbps: pass.downloadCapKbps,
      message,
    }),
  );

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'radius.sync',
    entityType: 'guest_pass',
    entityId: pass.id,
    action: 'sync',
    actorUserId: reqMeta.actorUserId,
    hotelId: pass.hotelId,
    payload: {
      username,
      roomId: pass.roomId,
      clientName: pass.clientName,
      sessionTimeout,
    },
  });

  return { username, status: 'synced' };
}

async function removeGuestPassFromRadius(passOrCode) {
  const username = normalizeRadiusUsername(typeof passOrCode === 'string' ? passOrCode : passOrCode.code);
  await removeRadiusUser(username);
  return { username, status: 'removed' };
}

function roomRadiusUsername(room) {
  const label = room.name || room.type || room.id;
  return normalizeRadiusUsername(`ROOM-${label}`);
}

async function syncRoomToRadius(roomId, reqMeta = {}) {
  const room = await prisma.room.findUnique({
    where: { id: roomId },
    include: {
      hotel: { select: { id: true, name: true, wifiConfig: true } },
    },
  });

  if (!room) return null;

  const username = roomRadiusUsername(room);
  const password = String(room.name || room.type || room.id);
  const wifiConfig = room.hotel?.wifiConfig;

  await replaceRadiusUser(
    username,
    [
      { attribute: 'Cleartext-Password', op: ':=', value: password },
    ],
    radiusRepliesForAccess({
      sessionTimeout: wifiConfig?.sessionDuration
        ? wifiConfig.sessionDuration * (wifiConfig.sessionUnit === 'days' ? 24 * 60 * 60 : 60 * 60)
        : null,
      uploadKbps: wifiConfig?.uploadSpeedKbps,
      downloadKbps: wifiConfig?.downloadSpeedKbps,
      message: `${room.hotel?.name || 'MboaLink'} - Chambre ${room.name || room.type}`,
    }),
  );

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'radius.sync',
    entityType: 'room',
    entityId: room.id,
    action: 'sync',
    actorUserId: reqMeta.actorUserId,
    hotelId: room.hotelId,
    payload: { username },
  });

  return { username, status: 'synced' };
}

async function removeRoomFromRadius(room) {
  const username = roomRadiusUsername(room);
  await removeRadiusUser(username);
  return { username, status: 'removed' };
}

function clearedAddressUsername(address) {
  return normalizeRadiusUsername(`CLEAR-${String(address).replace(/[:.]/g, '-')}`);
}

async function syncClearedAddressToRadius(addressId, reqMeta = {}) {
  const row = await prisma.clearedAddress.findUnique({
    where: { id: addressId },
    include: { hotel: { select: { id: true, name: true } } },
  });

  if (!row) return null;

  const username = clearedAddressUsername(row.address);
  const seconds = Math.max(0, Math.floor((new Date(row.expiresAt).getTime() - Date.now()) / 1000));

  if (seconds === 0) {
    await removeRadiusUser(username);
    return { username, status: 'removed' };
  }

  await replaceRadiusUser(
    username,
    [
      { attribute: 'Cleartext-Password', op: ':=', value: row.address },
    ],
    radiusRepliesForAccess({
      sessionTimeout: seconds,
      uploadKbps: row.uploadCapKbps,
      downloadKbps: row.downloadCapKbps,
      message: `${row.hotel?.name || 'MboaLink'} - Cleared ${row.address}`,
    }),
  );

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'radius.sync',
    entityType: 'cleared_address',
    entityId: row.id,
    action: 'sync',
    actorUserId: reqMeta.actorUserId,
    hotelId: row.hotelId,
    payload: { username, address: row.address },
  });

  return { username, status: 'synced' };
}

async function removeClearedAddressFromRadius(row) {
  const username = clearedAddressUsername(row.address);
  await removeRadiusUser(username);
  return { username, status: 'removed' };
}

module.exports = {
  normalizeRadiusUsername,
  syncGuestPassToRadius,
  removeGuestPassFromRadius,
  syncRoomToRadius,
  removeRoomFromRadius,
  syncClearedAddressToRadius,
  removeClearedAddressFromRadius,
};
