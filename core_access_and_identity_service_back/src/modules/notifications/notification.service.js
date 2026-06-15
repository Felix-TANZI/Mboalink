const prisma = require('../../config/prisma');
const { writeAuditLog } = require('../audit-logs/audit-log.service');

const PLATFORM_ROLES = ['ADMIN', 'SUPPORT'];
const HOTEL_ROLES = ['HOTEL_IT', 'RECEPTIONIST'];
const NOTIFIABLE_ROLES = ['ADMIN', 'SUPPORT', 'HOTEL_IT', 'RECEPTIONIST'];

function forbidden(message = 'Forbidden') {
  const error = new Error(message);
  error.status = 403;
  return error;
}

function badRequest(message) {
  const error = new Error(message);
  error.status = 400;
  return error;
}

function notificationSelect(currentUserId) {
  return {
    id: true,
    title: true,
    message: true,
    priority: true,
    category: true,
    hotelId: true,
    createdAt: true,
    sender: {
      select: {
        id: true,
        fullName: true,
        email: true,
        role: true,
      },
    },
    hotel: {
      select: {
        id: true,
        name: true,
      },
    },
    recipients: {
      where: currentUserId ? { userId: currentUserId } : undefined,
      select: {
        id: true,
        userId: true,
        readAt: true,
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            role: true,
            hotelId: true,
            hotel: { select: { id: true, name: true } },
          },
        },
      },
    },
  };
}

function recipientSelect() {
  return {
    id: true,
    fullName: true,
    email: true,
    role: true,
    hotelId: true,
    hotel: { select: { id: true, name: true } },
  };
}

async function listNotificationRecipients(actor) {
  if (PLATFORM_ROLES.includes(actor.role)) {
    return prisma.user.findMany({
      where: {
        isActive: true,
        role: { in: NOTIFIABLE_ROLES },
        id: { not: actor.sub },
      },
      select: recipientSelect(),
      orderBy: [{ role: 'asc' }, { fullName: 'asc' }],
    });
  }

  if (actor.role === 'HOTEL_IT') {
    if (!actor.hotelId) return [];
    return prisma.user.findMany({
      where: {
        isActive: true,
        role: 'RECEPTIONIST',
        hotelId: actor.hotelId,
        id: { not: actor.sub },
      },
      select: recipientSelect(),
      orderBy: { fullName: 'asc' },
    });
  }

  return [];
}

async function resolvePlatformRecipients(payload, actor) {
  const baseWhere = {
    isActive: true,
    role: { in: NOTIFIABLE_ROLES },
    id: { not: actor.sub },
  };

  if (payload.targetMode === 'ALL') {
    return prisma.user.findMany({ where: baseWhere, select: { id: true } });
  }

  if (payload.targetMode === 'HOTEL') {
    if (!payload.hotelId) throw badRequest('Hotel is required for this notification target');
    return prisma.user.findMany({
      where: {
        ...baseWhere,
        hotelId: payload.hotelId,
        role: { in: HOTEL_ROLES },
      },
      select: { id: true },
    });
  }

  if (payload.targetMode === 'ROLE') {
    if (!payload.role) throw badRequest('Role is required for this notification target');
    return prisma.user.findMany({
      where: {
        ...baseWhere,
        role: payload.role,
      },
      select: { id: true },
    });
  }

  if (!payload.userIds?.length) throw badRequest('At least one recipient is required');
  return prisma.user.findMany({
    where: {
      ...baseWhere,
      id: { in: payload.userIds, not: actor.sub },
    },
    select: { id: true },
  });
}

async function resolveHotelItRecipients(payload, actor) {
  if (!actor.hotelId) throw forbidden('Hotel scope required');

  if (!['HOTEL', 'USERS'].includes(payload.targetMode)) {
    throw forbidden('Hotel IT can only notify receptionists from its hotel');
  }

  if (payload.targetMode === 'USERS' && !payload.userIds?.length) {
    throw badRequest('At least one receptionist is required');
  }

  return prisma.user.findMany({
    where: {
      isActive: true,
      role: 'RECEPTIONIST',
      hotelId: actor.hotelId,
      id: payload.targetMode === 'USERS' ? { in: payload.userIds, not: actor.sub } : { not: actor.sub },
    },
    select: { id: true },
  });
}

async function createNotification(payload, reqMeta) {
  const actor = reqMeta.actor;
  if (!actor || actor.role === 'RECEPTIONIST') {
    throw forbidden('This role cannot send notifications');
  }

  const recipients = PLATFORM_ROLES.includes(actor.role)
    ? await resolvePlatformRecipients(payload, actor)
    : await resolveHotelItRecipients(payload, actor);

  const recipientIds = [...new Set(recipients.map((user) => user.id))];
  if (recipientIds.length === 0) {
    throw badRequest('No valid recipient found for this notification');
  }

  const notification = await prisma.notification.create({
    data: {
      senderId: actor.sub,
      hotelId: actor.role === 'HOTEL_IT' ? actor.hotelId : payload.hotelId || null,
      title: payload.title,
      message: payload.message,
      priority: payload.priority,
      category: payload.category || null,
      recipients: {
        create: recipientIds.map((userId) => ({ userId })),
      },
    },
    select: notificationSelect(null),
  });

  await writeAuditLog({
    requestId: reqMeta.requestId,
    eventType: 'notification',
    entityType: 'notification',
    entityId: notification.id,
    action: 'create',
    actorUserId: actor.sub,
    hotelId: notification.hotelId,
    payload: {
      targetMode: payload.targetMode,
      recipientCount: recipientIds.length,
      priority: notification.priority,
      title: notification.title,
    },
  });

  return notification;
}

async function listInbox(actor, query = {}) {
  const unreadOnly = query.unreadOnly === 'true';
  return prisma.notification.findMany({
    where: {
      recipients: {
        some: {
          userId: actor.sub,
          readAt: unreadOnly ? null : undefined,
        },
      },
    },
    select: notificationSelect(actor.sub),
    orderBy: { createdAt: 'desc' },
    take: Math.min(Number(query.limit || 80), 150),
  });
}

async function listSent(actor) {
  if (actor.role === 'RECEPTIONIST') return [];
  return prisma.notification.findMany({
    where: { senderId: actor.sub },
    select: notificationSelect(null),
    orderBy: { createdAt: 'desc' },
    take: 80,
  });
}

async function markNotificationRead(notificationId, actor) {
  const recipient = await prisma.notificationRecipient.findFirst({
    where: {
      notificationId,
      userId: actor.sub,
    },
  });

  if (!recipient) {
    throw forbidden('Notification not available for this user');
  }

  return prisma.notificationRecipient.update({
    where: { id: recipient.id },
    data: { readAt: recipient.readAt || new Date() },
    select: {
      id: true,
      notificationId: true,
      userId: true,
      readAt: true,
    },
  });
}

async function getUnreadCount(actor) {
  const count = await prisma.notificationRecipient.count({
    where: {
      userId: actor.sub,
      readAt: null,
    },
  });
  return { count };
}

module.exports = {
  listNotificationRecipients,
  createNotification,
  listInbox,
  listSent,
  markNotificationRead,
  getUnreadCount,
};
