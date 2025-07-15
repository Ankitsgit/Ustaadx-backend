// File: src/controllers/bookingController.js
const Booking = require('../models/Booking');

const requestBooking = async (req, res) => {
  console.log(req.body);
  const { toUser, skill, time, message } = req.body;

  // ❌ Prevent self-booking
  if (toUser === req.user.id) {
    return res.status(400).json({ message: "You cannot book a session with yourself." });
  }

  try {
    const booking = await Booking.create({
      fromUser: req.user.id,
      toUser,
      skill,
      time,
      message
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const respondBooking = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      $or: [
        { fromUser: req.user.id },
        { toUser: req.user.id }
      ]
    }).populate('toUser fromUser', '-password');

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Export all controller functions using CommonJS
module.exports = {
  requestBooking,
  respondBooking,
  getUserBookings
};
