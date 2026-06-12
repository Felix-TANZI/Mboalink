const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const { getOverview } = require('./dashboard.service');

const getDashboardOverview = asyncHandler(async (req, res) => {
  const isHotelScoped = req.user?.role === 'RECEPTIONIST' || req.user?.role === 'HOTEL_IT';
  if (isHotelScoped && !req.user?.hotelId) {
    const err = new Error('Hotel-scoped account is not linked to a hotel');
    err.status = 403;
    throw err;
  }
  const hotelId = isHotelScoped ? req.user.hotelId : req.query.hotelId;
  const data = await getOverview(hotelId);
  res.json(success(data));
});

module.exports = {
  getDashboardOverview,
};
