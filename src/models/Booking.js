

// File: src/models/Booking.js
// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema(
//   {
//     fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     toUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     status: {
//       type: String,
//       enum: ['pending', 'accepted', 'rejected'],
//       default: 'pending'
//     }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model('Booking', bookingSchema);
// File: src/models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
  fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  toUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skill: { type: String },
  timeslot: { type: String },
  message: { type: String },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);
