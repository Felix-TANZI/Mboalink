const { z } = require('zod');

const createClearedAddressSchema = z.object({
  hotelId: z.string().min(3),
  address: z.string().min(3).max(120),
  networkInterface: z.string().max(80).optional(),
  expiresAt: z.string().datetime(),
  uploadCapKbps: z.number().int().min(0).max(200000),
  downloadCapKbps: z.number().int().min(0).max(200000),
  connectionType: z.string().max(80).optional(),
  notes: z.string().max(1000).optional(),
});

const deleteManyClearedAddressSchema = z.object({
  ids: z.array(z.string().min(3)).min(1),
});

module.exports = {
  createClearedAddressSchema,
  deleteManyClearedAddressSchema,
};
