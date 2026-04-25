const { z } = require('zod');

const photoSchema = z.object({
  url: z.string().min(1),
  isMain: z.boolean().optional(),
  name: z.string().optional(),
});

const createRoomSchema = z.object({
  type: z.string().min(2).max(80),
  name: z.string().min(1).max(80),
  capacity: z.number().int().positive().max(20),
  floor: z.number().int().min(-5).max(200).optional(),
  surface: z.number().positive().max(3000).optional(),
  description: z.string().max(2000).optional(),
  equipments: z.array(z.string()).default([]),
  photos: z.array(photoSchema).default([]),
});

const updateRoomSchema = createRoomSchema.partial();

module.exports = {
  createRoomSchema,
  updateRoomSchema,
};
