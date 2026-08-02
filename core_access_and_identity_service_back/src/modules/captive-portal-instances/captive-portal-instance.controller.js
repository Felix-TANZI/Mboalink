const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const {
  createCaptivePortal,
  deleteCaptivePortal,
  listCaptivePortals,
  updateCaptivePortal,
} = require('./captive-portal-instance.service');

const getCaptivePortals = asyncHandler(async (req, res) => {
  const portals = await listCaptivePortals(req.params.hotelId, req.user);
  res.json(success(portals));
});

const postCaptivePortal = asyncHandler(async (req, res) => {
  const portal = await createCaptivePortal(req.params.hotelId, req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
    actorRole: req.user?.role,
    actorHotelId: req.user?.hotelId,
  });
  res.status(201).json(success(portal));
});

const patchCaptivePortal = asyncHandler(async (req, res) => {
  const portal = await updateCaptivePortal(req.params.hotelId, req.params.portalId, req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
    actorRole: req.user?.role,
    actorHotelId: req.user?.hotelId,
  });
  res.json(success(portal));
});

const removeCaptivePortal = asyncHandler(async (req, res) => {
  const result = await deleteCaptivePortal(req.params.hotelId, req.params.portalId, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
    actorRole: req.user?.role,
    actorHotelId: req.user?.hotelId,
  });
  res.json(success(result));
});

module.exports = {
  getCaptivePortals,
  patchCaptivePortal,
  postCaptivePortal,
  removeCaptivePortal,
};
