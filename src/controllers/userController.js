// File: src/controllers/userController.js
const User = require('../models/User'); // ✅ Correct model import

const getAllUsers = async (req, res) => {
  const { skill, search } = req.query;
  const query = {};

  if (skill) query.skills = skill;
  if (search) query.name = { $regex: search, $options: 'i' };

  try {
    const users = await User.find(query).select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllUsers
};
