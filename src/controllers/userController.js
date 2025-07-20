// File: src/controllers/userController.js
const User = require('../models/User'); // ✅ Correct model import

const getAllUsers = async (req, res) => {
  const { skill, search } = req.query;

  const query = {
    skillsOffered: { $exists: true, $not: { $size: 0 } },
    skillsWanted: { $exists: true, $not: { $size: 0 } }
  };

  if (skill) query.skillsOffered = skill;
  if (search) query.name = { $regex: search, $options: 'i' };

  try {
    const users = await User.find(query).select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// module.exports = {
//   getAllUsers
// };
// GET /api/users/me
const getCurrentUser = async (req, res) => {
  
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user' });
  }
};

// PUT /api/users/me
const updateCurrentUser = async (req, res) => {
  try {
    console.log(req.body);
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
      runValidators: true
    }).select('-password');
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update user', error: err.message });
  }
};

const uploadProfileImage = async (req, res) => {
  // console.log('--- Upload Profile Image Called ---');
  // console.log('Headers:', req.headers);
  // console.log('Body:', req.body);
  // console.log('File:', req.file);
  // console.log('User:', req.user);

  try {
    if (!req.file) {
      console.log('⚠️ No file received');
      return res.status(400).json({ message: 'No image uploaded' });
    }

    const imagePath = `/uploads/profile-images/${req.file.filename}`;
    const fullImageUrl = `${req.protocol}://${req.get('host')}${imagePath}`;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { profileImage: imagePath },
      { new: true }
    );

    res.json({
      message: 'Image uploaded successfully',
      user: updatedUser,
      imageUrl: fullImageUrl
    });
  } catch (err) {
    console.error('🔥 Upload error:', err);
    res.status(500).json({ message: err.message });
  }
};



module.exports = {
  getAllUsers,
  getCurrentUser,
  updateCurrentUser,
  uploadProfileImage
};