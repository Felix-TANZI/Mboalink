const { z } = require('zod');

const status = z.enum(['ACTIVE', 'INACTIVE']);

const createCaptivePortalSchema = z.object({
  name: z.string().min(2).max(80),
  ssid: z.string().min(2).max(120),
  status: status.default('ACTIVE'),
});

const updateCaptivePortalSchema = createCaptivePortalSchema.partial();

module.exports = {
  createCaptivePortalSchema,
  updateCaptivePortalSchema,
};
