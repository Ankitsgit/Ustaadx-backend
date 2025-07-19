

// File: src/models/Booking.js

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
  fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User',unique: true  },
  toUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skill: { type: String , required: true},
  timeslot: { type: String, required: true },
  message: { type: String },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: 'pending'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
