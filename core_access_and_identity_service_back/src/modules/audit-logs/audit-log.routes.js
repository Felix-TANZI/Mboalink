const { Router } = require('express');
const { requireAuth, requireRole } = require('../../middlewares/auth');
const { getAuditLogs, exportAuditLogsJsonl } = require('./audit-log.controller');

const router = Router();

router.get('/', requireAuth, requireRole('ADMIN', 'SUPPORT'), getAuditLogs);
router.get('/export/jsonl', requireAuth, requireRole('ADMIN', 'SUPPORT'), exportAuditLogsJsonl);

module.exports = router;
