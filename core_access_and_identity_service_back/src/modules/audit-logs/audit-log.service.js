const prisma = require('../../config/prisma');
const logger = require('../../config/logger');

async function writeAuditLog(params) {
  const {
    requestId,
    eventType,
    entityType,
    entityId,
    action,
    severity = 'INFO',
    actorUserId,
    hotelId,
    payload,
  } = params;

  const record = await prisma.auditLog.create({
    data: {
      requestId,
      eventType,
      entityType,
      entityId,
      action,
      severity,
      actorUserId,
      hotelId,
      payload,
    },
  });

  logger.info({
    requestId,
    eventType,
    entityType,
    entityId,
    action,
    severity,
    actorUserId,
    hotelId,
    payload,
  }, 'Audit event');

  return record;
}

async function listAuditLogs(query) {
  const take = Math.min(Number(query.limit || 100), 500);
  const where = {
    hotelId: query.hotelId || undefined,
    eventType: query.eventType || undefined,
    action: query.action || undefined,
  };

  return prisma.auditLog.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    take,
  });
}

module.exports = {
  writeAuditLog,
  listAuditLogs,
};
