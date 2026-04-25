const { z } = require('zod');

const createManualLoginSchema = z.object({
  hotelId:     z.string().min(3),
  roomId:      z.string().min(3).optional(),
  roomNumber:  z.string().min(1).max(80).optional(),
  clientName:  z.string().min(1).max(120),
  startedAt:   z.string().datetime({ message: 'Date d\'entrée invalide' }),
  endedAt:     z.string().datetime({ message: 'Date de sortie invalide' }),
  ipAddress:   z.string().max(64).optional(),
  macAddress:  z.string().max(64).optional(),
}).refine((data) => data.roomId || data.roomNumber, {
  message: 'Numéro de chambre requis',
  path: ['roomNumber'],
});

const updateManualLoginSchema = z.object({
  clientName: z.string().min(1).max(120).optional(),
  roomId:     z.string().min(3).optional(),
  startedAt:  z.string().datetime().optional(),
  endedAt:    z.string().datetime().optional(),
});

const deleteManySessionsSchema = z.object({
  ids: z.array(z.string().min(3)).min(1),
});

module.exports = {
  createManualLoginSchema,
  updateManualLoginSchema,
  deleteManySessionsSchema,
};
