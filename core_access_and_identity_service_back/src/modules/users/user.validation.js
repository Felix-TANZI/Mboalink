const { z } = require('zod');

const userRoleSchema = z.enum(['ADMIN', 'CLIENT', 'RECEPTIONIST', 'SUPPORT', 'HOTEL_IT']);

const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(128),
  fullName: z.string().min(2).max(120),
  role: userRoleSchema,
  hotelId: z.string().min(3).optional().or(z.literal('')),
  isActive: z.boolean().optional(),
});

const updateUserSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().min(8).max(128).optional().or(z.literal('')),
  fullName: z.string().min(2).max(120).optional(),
  role: userRoleSchema.optional(),
  hotelId: z.string().min(3).optional().or(z.literal('')).nullable(),
  isActive: z.boolean().optional(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
};
