const { z } = require('zod');

const targetModeSchema = z.enum(['ALL', 'HOTEL', 'ROLE', 'USERS']);
const roleSchema = z.enum(['ADMIN', 'SUPPORT', 'HOTEL_IT', 'RECEPTIONIST']);

const createNotificationSchema = z.object({
  title: z.string().min(3).max(140),
  message: z.string().min(5).max(4000),
  priority: z.enum(['INFO', 'WARNING', 'URGENT']).default('INFO'),
  category: z.string().max(80).optional().or(z.literal('')),
  targetMode: targetModeSchema,
  hotelId: z.string().min(3).optional().or(z.literal('')),
  role: roleSchema.optional(),
  userIds: z.array(z.string().min(3)).optional().default([]),
});

module.exports = {
  createNotificationSchema,
};
