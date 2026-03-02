const { z } = require('zod');

const createManualLoginSchema = z.object({
  hotelId: z.string().min(3),
  roomId: z.string().min(3),
  passCode: z.string().max(40).optional(),
  clientName: z.string().max(120).optional(),
  ipAddress: z.string().max(64).optional(),
  macAddress: z.string().max(64).optional(),
});

const deleteManySessionsSchema = z.object({
  ids: z.array(z.string().min(3)).min(1),
});

module.exports = {
  createManualLoginSchema,
  deleteManySessionsSchema,
};
