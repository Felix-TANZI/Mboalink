const { success } = require('../../utils/api-response');
const asyncHandler = require('../../utils/async-handler');
const { listAuditLogs } = require('./audit-log.service');

const getAuditLogs = asyncHandler(async (req, res) => {
  const logs = await listAuditLogs(req.query);
  res.json(success(logs));
});

const exportAuditLogsJsonl = asyncHandler(async (req, res) => {
  const logs = await listAuditLogs({ ...req.query, limit: req.query.limit || 10000 });

  res.setHeader('Content-Type', 'application/x-ndjson');
  res.setHeader('Content-Disposition', 'attachment; filename="audit-logs.jsonl"');

  for (const log of logs) {
    res.write(`${JSON.stringify(log)}\n`);
  }

  res.end();
});

module.exports = {
  getAuditLogs,
  exportAuditLogsJsonl,
};
