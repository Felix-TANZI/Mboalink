const { z } = require('zod');

const captiveAuthSchema = z.object({
  code: z.string().min(1).max(64).optional(),
  uuid: z.string().min(1).max(64).optional(),
  clientName: z.string().max(120).optional(),
  roomNumber: z.string().max(80).optional(),
  hotelId: z.string().max(80).optional(),
  ipAddress: z.string().max(64).optional(),
  macAddress: z.string().max(64).optional(),
}).refine(
  (value) => value.code || value.uuid || (value.clientName && value.roomNumber),
  { message: 'Code, UUID ou nom + chambre requis.' },
);

module.exports = {
  captiveAuthSchema,
};
