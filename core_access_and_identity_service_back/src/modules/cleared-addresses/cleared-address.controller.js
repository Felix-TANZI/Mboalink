const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const { listClearedAddresses, createClearedAddress, deleteClearedAddresses } = require('./cleared-address.service');

const getClearedAddresses = asyncHandler(async (req, res) => {
  const data = await listClearedAddresses(req.query);
  res.json(success(data));
});

const postClearedAddress = asyncHandler(async (req, res) => {
  const data = await createClearedAddress(req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
    actorName: req.user?.fullName,
  });
  res.status(201).json(success(data));
});

const removeClearedAddresses = asyncHandler(async (req, res) => {
  const data = await deleteClearedAddresses(req.body.ids, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.json(success(data));
});

module.exports = {
  getClearedAddresses,
  postClearedAddress,
  removeClearedAddresses,
};
