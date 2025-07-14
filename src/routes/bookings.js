// File: src/routes/bookings.js
const express = require('express');
const {
  requestBooking,
  respondBooking,
  getUserBookings
} = require('../controllers/bookingController');
const protect = require('../middleware/protect'); // Assuming you use JWT middleware

const router = express.Router();

router.post('/', protect, requestBooking);
router.put('/:id', protect, respondBooking);
router.get('/', protect, getUserBookings);

module.exports = router;

