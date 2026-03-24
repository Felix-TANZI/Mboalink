const { z } = require('zod');

const authMethod = z.enum(['CAPTIVE_PORTAL', 'GUEST_PASS', 'ROOM_NUMBER', 'VOUCHER', 'SMS_CODE', 'EMAIL']);
const status = z.enum(['ACTIVE', 'INACTIVE']);

const upsertWifiConfigSchema = z.object({
  ssid: z.string().min(2).max(120),
  password: z.string().max(120).optional().or(z.literal('')),
  authMethod,
  sessionDuration: z.number().int().positive().max(999),
  sessionUnit: z.enum(['hours', 'days']),
  maxDevices: z.number().int().min(1).max(20),
  uploadSpeedKbps: z.number().int().min(100).max(200000),
  downloadSpeedKbps: z.number().int().min(100).max(200000),
  zones: z.array(z.string()).default([]),
  captivePortal: z.object({
    logo: z.string().optional().or(z.literal('')),
    welcomeMessage: z.string().max(500).optional(),
    termsUrl: z.string().url().optional().or(z.literal('')),
  }).default({}),
  status,
});

module.exports = {
  upsertWifiConfigSchema,
};
