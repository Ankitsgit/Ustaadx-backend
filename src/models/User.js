// File: src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: String,
    location: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // skills: [{ type: String }]
    skillsOffered: [String],
    skillsWanted: [String],
    availability: [String],
    profileImage: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
