const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const {
  listGuestPasses,
  createGuestPass,
  createGuestPassesBulk,
  revokeGuestPass,
  deleteGuestPass,
} = require('./guest-pass.service');

const getGuestPasses = asyncHandler(async (req, res) => {
  const data = await listGuestPasses(req.query);
  res.json(success(data));
});

const postGuestPass = asyncHandler(async (req, res) => {
  const data = await createGuestPass(req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.status(201).json(success(data));
});

const postGuestPassesBulk = asyncHandler(async (req, res) => {
  const data = await createGuestPassesBulk(req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.status(201).json(success(data, { count: data.length }));
});

const patchRevokeGuestPass = asyncHandler(async (req, res) => {
  const data = await revokeGuestPass(req.params.passId, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.json(success(data));
});

const removeGuestPass = asyncHandler(async (req, res) => {
  await deleteGuestPass(req.params.passId, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });

  res.json(success({ deleted: true }));
});

module.exports = {
  getGuestPasses,
  postGuestPass,
  postGuestPassesBulk,
  patchRevokeGuestPass,
  removeGuestPass,
};
