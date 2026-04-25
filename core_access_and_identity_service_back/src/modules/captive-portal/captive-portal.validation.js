const { z } = require('zod');

const captiveAuthSchema = z.object({
  code: z.string().min(1).max(20),
  ipAddress: z.string().max(64).optional(),
  macAddress: z.string().max(64).optional(),
});

module.exports = {
  captiveAuthSchema,
};
