const { z } = require('zod');

const upsertGuestConfigSchema = z.object({
  hotelId: z.string().min(3),
  uploadClearAddressKbps: z.number().int().min(0).max(200000),
  downloadClearAddressKbps: z.number().int().min(0).max(200000),
  uploadGuestPassKbps: z.number().int().min(0).max(200000),
  downloadGuestPassKbps: z.number().int().min(0).max(200000),
  maxPassDurationDays: z.number().int().min(1).max(1365),
  maxCountPass: z.number().int().min(1).max(1000),
  outageModeEnabled: z.boolean(),
});

module.exports = {
  upsertGuestConfigSchema,
};
