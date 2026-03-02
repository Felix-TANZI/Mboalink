const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const { listWifiConfigs, getWifiConfigByHotelId, upsertWifiConfig } = require('./wifi-config.service');

const getWifiConfigs = asyncHandler(async (req, res) => {
  const configs = await listWifiConfigs(req.query);
  res.json(success(configs));
});

const getWifiConfigByHotel = asyncHandler(async (req, res) => {
  const config = await getWifiConfigByHotelId(req.params.hotelId);
  res.json(success(config));
});

const putWifiConfig = asyncHandler(async (req, res) => {
  const config = await upsertWifiConfig(req.params.hotelId, req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
    actorName: req.user?.fullName,
  });

  res.json(success(config));
});

module.exports = {
  getWifiConfigs,
  getWifiConfigByHotel,
  putWifiConfig,
};
