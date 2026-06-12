const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const { listHotels, getHotelById, createHotel, updateHotel, deleteHotel } = require('./hotel.service');

const getHotels = asyncHandler(async (req, res) => {
  const hotels = await listHotels(req.query, req.user);
  res.json(success(hotels));
});

const getHotel = asyncHandler(async (req, res) => {
  const hotel = await getHotelById(req.params.hotelId, req.user);
  res.json(success(hotel));
});

const postHotel = asyncHandler(async (req, res) => {
  const hotel = await createHotel(req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.status(201).json(success(hotel));
});

const patchHotel = asyncHandler(async (req, res) => {
  const hotel = await updateHotel(req.params.hotelId, req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
    actorRole: req.user?.role,
    actorHotelId: req.user?.hotelId,
  });
  res.json(success(hotel));
});

const removeHotel = asyncHandler(async (req, res) => {
  await deleteHotel(req.params.hotelId, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
  });
  res.json(success({ deleted: true }));
});

module.exports = {
  getHotels,
  getHotel,
  postHotel,
  patchHotel,
  removeHotel,
};
