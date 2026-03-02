const { Router } = require('express');
const validate = require('../../middlewares/validate');
const { requireAuth, requireRole } = require('../../middlewares/auth');
const { getRooms, postRoom, patchRoom, removeRoom } = require('./room.controller');
const { createRoomSchema, updateRoomSchema } = require('./room.validation');

const router = Router();

router.get('/rooms', requireAuth, getRooms);
router.post('/hotels/:hotelId/rooms', requireAuth, requireRole('ADMIN', 'SUPPORT'), validate(createRoomSchema), postRoom);
router.patch('/rooms/:roomId', requireAuth, requireRole('ADMIN', 'SUPPORT'), validate(updateRoomSchema), patchRoom);
router.delete('/rooms/:roomId', requireAuth, requireRole('ADMIN', 'SUPPORT'), removeRoom);

module.exports = router;
