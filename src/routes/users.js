
// File: src/routes/users.js
const express = require('express');
const {
  getAllUsers,
  getCurrentUser,
  updateCurrentUser,
  uploadProfileImage 
} = require('../controllers/userController');
const upload = require('../middleware/upload'); // multer config
const protect = require('../middleware/protect');

const router = express.Router();

// router.get('/', getAllUsers); // 🔓 No protect middleware

router.get('/', protect, getAllUsers);              // GET all users
router.get('/me', protect, getCurrentUser);         // ✅ GET logged-in user's profile
router.put('/me', protect, updateCurrentUser);      // ✅ Update logged-in user's profile
router.post('/upload-profile', protect, upload.single('profileImage'), uploadProfileImage);

module.exports = router;
