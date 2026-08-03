const { z } = require('zod');

const status = z.enum(['ACTIVE', 'INACTIVE']);
const authMode = z.enum(['HOTEL_GUEST', 'UUID_ONLY']);

const createCaptivePortalSchema = z.object({
  name: z.string().min(2).max(80),
  ssid: z.string().min(2).max(120),
  status: status.default('ACTIVE'),
  authMode: authMode.optional(),
});

const updateCaptivePortalSchema = createCaptivePortalSchema.partial();

module.exports = {
  createCaptivePortalSchema,
  updateCaptivePortalSchema,
};
