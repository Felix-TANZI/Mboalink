const { Router } = require('express');
const validate = require('../../middlewares/validate');
const { requireAuth, requireRole } = require('../../middlewares/auth');
const { createHotelSchema, updateHotelSchema } = require('./hotel.validation');
const { getHotels, getHotel, postHotel, patchHotel, removeHotel } = require('./hotel.controller');

const router = Router();

router.get('/', requireAuth, getHotels);
router.get('/:hotelId', requireAuth, getHotel);
router.post('/', requireAuth, requireRole('ADMIN', 'SUPPORT'), validate(createHotelSchema), postHotel);
router.patch('/:hotelId', requireAuth, requireRole('ADMIN', 'SUPPORT'), validate(updateHotelSchema), patchHotel);
router.delete('/:hotelId', requireAuth, requireRole('ADMIN'), removeHotel);

module.exports = router;
