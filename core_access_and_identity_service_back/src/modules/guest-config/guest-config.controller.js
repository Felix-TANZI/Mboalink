const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const { getGuestConfig, upsertGuestConfig } = require('./guest-config.service');

const getConfig = asyncHandler(async (req, res) => {
  const data = await getGuestConfig(req.params.hotelId);
  res.json(success(data));
});

const putConfig = asyncHandler(async (req, res) => {
  const data = await upsertGuestConfig(req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.json(success(data));
});

module.exports = {
  getConfig,
  putConfig,
};
