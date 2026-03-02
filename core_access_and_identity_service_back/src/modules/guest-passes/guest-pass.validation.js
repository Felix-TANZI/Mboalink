const { z } = require('zod');

const basePassSchema = z.object({
  hotelId: z.string().min(3),
  code: z.string().min(4).max(20).regex(/^[A-Z0-9#_-]+$/).optional(),
  label: z.string().max(80).optional(),
  durationValue: z.number().int().min(0).max(3650).optional(),
  durationUnit: z.enum(['Hours', 'Days']).optional(),
  maxUses: z.number().int().min(0).max(100000).default(1),
  expiryDate: z.string().optional(),
  expiryTime: z.string().optional(),
  uploadCapKbps: z.number().int().min(0).max(200000).default(1500),
  downloadCapKbps: z.number().int().min(0).max(200000).default(1500),
  zones: z.array(z.string()).default([]),
});

const createGuestPassSchema = basePassSchema;

const bulkGuestPassSchema = basePassSchema.extend({
  quantity: z.number().int().min(1).max(1000),
  codePrefix: z.string().max(10).optional(),
});

module.exports = {
  createGuestPassSchema,
  bulkGuestPassSchema,
};
