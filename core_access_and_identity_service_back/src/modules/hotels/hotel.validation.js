const { z } = require('zod');

const hotelStatus = z.enum(['ACTIVE', 'MAINTENANCE', 'INACTIVE']);

const photoSchema = z.object({
  url: z.string().min(1),
  isMain: z.boolean().optional(),
  name: z.string().optional(),
});

const createHotelSchema = z.object({
  name: z.string().min(2).max(160),
  city: z.string().min(2).max(80),
  country: z.string().min(2).max(80),
  address: z.string().min(4).max(240),
  contactEmail: z.string().email().optional().or(z.literal('')),
  phone: z.string().max(40).optional(),
  website: z.string().url().optional().or(z.literal('')),
  description: z.string().max(2000).optional(),
  floors: z.number().int().positive().max(200).optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  amenities: z.array(z.string()).default([]),
  photos: z.array(photoSchema).default([]),
  status: hotelStatus.default('ACTIVE'),
});

const updateHotelSchema = createHotelSchema.partial();

module.exports = {
  createHotelSchema,
  updateHotelSchema,
};
