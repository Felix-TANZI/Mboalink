const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const { authenticateCaptivePortal, getCaptiveHotel } = require('./captive-portal.service');

const postCaptiveAuth = asyncHandler(async (req, res) => {
  const data = await authenticateCaptivePortal({
    ...req.body,
    ipAddress: req.body.ipAddress
      || req.headers['x-forwarded-for']
      || req.headers['x-real-ip']
      || req.ip,
  });

  res.json(success(data));
});

const getCaptiveHotelPublic = asyncHandler(async (req, res) => {
  const data = await getCaptiveHotel(req.params.hotelId || req.query.hotelId);
  res.json(success(data));
});

module.exports = {
  postCaptiveAuth,
  getCaptiveHotelPublic,
};
