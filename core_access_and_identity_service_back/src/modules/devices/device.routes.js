const { Router } = require('express');
const validate = require('../../middlewares/validate');
const { requireAuth, requireRole } = require('../../middlewares/auth');
const { getDevices, getDeviceMacAddresses, getDeviceByMacAddress, postDevice, patchDevice, postRestartDevice, postMetric, getMetrics } = require('./device.controller');
const { createDeviceSchema, updateDeviceSchema, addMetricSchema } = require('./device.validation');

const router = Router();

router.get('/', requireAuth, getDevices);
router.get('/mac-addresses', requireAuth, getDeviceMacAddresses);
router.get('/by-mac/:macAddress', requireAuth, getDeviceByMacAddress);
router.post('/', requireAuth, requireRole('ADMIN', 'SUPPORT'), validate(createDeviceSchema), postDevice);
router.patch('/:deviceId', requireAuth, requireRole('ADMIN', 'SUPPORT'), validate(updateDeviceSchema), patchDevice);
router.post('/:deviceId/restart', requireAuth, requireRole('ADMIN', 'SUPPORT'), postRestartDevice);
router.get('/:deviceId/metrics', requireAuth, getMetrics);
router.post('/:deviceId/metrics', requireAuth, requireRole('ADMIN', 'SUPPORT'), validate(addMetricSchema), postMetric);

module.exports = router;
