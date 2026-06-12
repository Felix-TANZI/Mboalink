const asyncHandler = require('../../utils/async-handler');
const { success } = require('../../utils/api-response');
const { listRooms, createRoom, updateRoom, deleteRoom } = require('./room.service');

const getRooms = asyncHandler(async (req, res) => {
  const rooms = await listRooms(req.query, req.user);
  res.json(success(rooms));
});

const postRoom = asyncHandler(async (req, res) => {
  const room = await createRoom(req.params.hotelId, req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
    actorRole: req.user?.role,
    actorHotelId: req.user?.hotelId,
  });
  res.status(201).json(success(room));
});

const patchRoom = asyncHandler(async (req, res) => {
  const room = await updateRoom(req.params.roomId, req.body, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
    actorRole: req.user?.role,
    actorHotelId: req.user?.hotelId,
  });
  res.json(success(room));
});

const removeRoom = asyncHandler(async (req, res) => {
  await deleteRoom(req.params.roomId, {
    requestId: req.context.requestId,
    actorUserId: req.user?.sub,
    actorRole: req.user?.role,
    actorHotelId: req.user?.hotelId,
  });
  res.json(success({ deleted: true }));
});

module.exports = {
  getRooms,
  postRoom,
  patchRoom,
  removeRoom,
};
