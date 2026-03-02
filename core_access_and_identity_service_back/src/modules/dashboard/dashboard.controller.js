const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const { getOverview } = require('./dashboard.service');

const getDashboardOverview = asyncHandler(async (req, res) => {
  const data = await getOverview(req.query.hotelId);
  res.json(success(data));
});

module.exports = {
  getDashboardOverview,
};
