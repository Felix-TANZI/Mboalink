const { z } = require('zod');

const createDeviceSchema = z.object({
  hotelId: z.string().min(3),
  macAddress: z.string().min(8).max(64),
  serialNumber: z.string().max(80).optional(),
  model: z.string().max(80).optional(),
  firmwareVersion: z.string().max(40).optional(),
  localIp: z.string().max(64).optional(),
  zone: z.string().max(60).optional(),
  floor: z.number().int().min(-5).max(200).optional(),
  installedAt: z.string().datetime().optional(),
});

const updateDeviceSchema = createDeviceSchema.partial().omit({ hotelId: true, macAddress: true });

const addMetricSchema = z.object({
  cpuPercent: z.number().min(0).max(100).optional(),
  memoryPercent: z.number().min(0).max(100).optional(),
  temperatureC: z.number().min(-30).max(150).optional(),
  latencyMs: z.number().min(0).max(10000).optional(),
  errorRate: z.number().min(0).max(100).optional(),
  throughputInKbps: z.number().min(0).max(10000000).optional(),
  throughputOutKbps: z.number().min(0).max(10000000).optional(),
  capturedAt: z.string().datetime().optional(),
});

module.exports = {
  createDeviceSchema,
  updateDeviceSchema,
  addMetricSchema,
};
