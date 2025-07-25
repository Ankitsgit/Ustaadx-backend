// File: src/controllers/authController.js
// File: src/controllers/authController.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
   console.log('Incoming registration data:', req.body); // 👈 Add this
  const { name, email, password } = req.body;
  console.log('Received request body:', req.body);

  try {
    const existingUser = await User.findOne({ email });
    console.log('Found existing user:', existingUser); 
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token, user });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  register,
  login,
};


