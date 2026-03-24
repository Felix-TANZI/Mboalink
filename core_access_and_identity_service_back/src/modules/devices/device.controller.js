const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const { listDevices, listDeviceMacAddresses, getDeviceByMac, createDevice, updateDevice, restartDevice, addMetric, listMetrics } = require('./device.service');

const getDevices = asyncHandler(async (req, res) => {
  const data = await listDevices(req.query);
  res.json(success(data));
});

const getDeviceMacAddresses = asyncHandler(async (req, res) => {
  const data = await listDeviceMacAddresses(req.query);
  res.json(success(data));
});

const getDeviceByMacAddress = asyncHandler(async (req, res) => {
  const data = await getDeviceByMac(req.params.macAddress);
  res.json(success(data));
});

const postDevice = asyncHandler(async (req, res) => {
  const data = await createDevice(req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.status(201).json(success(data));
});

const patchDevice = asyncHandler(async (req, res) => {
  const data = await updateDevice(req.params.deviceId, req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.json(success(data));
});

const postRestartDevice = asyncHandler(async (req, res) => {
  const data = await restartDevice(req.params.deviceId, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.json(success(data));
});

const postMetric = asyncHandler(async (req, res) => {
  const data = await addMetric(req.params.deviceId, req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.status(201).json(success(data));
});

const getMetrics = asyncHandler(async (req, res) => {
  const data = await listMetrics(req.params.deviceId, req.query);
  res.json(success(data));
});

module.exports = {
  getDevices,
  getDeviceMacAddresses,
  getDeviceByMacAddress,
  postDevice,
  patchDevice,
  postRestartDevice,
  postMetric,
  getMetrics,
};
