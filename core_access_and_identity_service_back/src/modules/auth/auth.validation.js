const { z } = require('zod');

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(128),
  fullName: z.string().min(2).max(120),
  role: z.enum(['ADMIN', 'CLIENT', 'RECEPTIONIST', 'SUPPORT']).optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(128),
});

const verifyMfaSchema = z.object({
  email: z.string().email(),
  code: z.string().length(6).regex(/^\d{6}$/, 'Le code doit contenir exactement 6 chiffres'),
});

const refreshSchema = z.object({
  refreshToken: z.string().min(10),
});

module.exports = {
  registerSchema,
  loginSchema,
  verifyMfaSchema,
  refreshSchema,
};