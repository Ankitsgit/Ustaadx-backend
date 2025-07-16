// controllers/exploreController.js
const User = require('../models/User');

const getExplorePosts = async (req, res) => {
  try {
    const users = await User.find({}, 'name skillsOffered skillsWanted profileImage bio')
      .limit(20)
      .sort({ createdAt: -1 });

    const formatted = users.map((user) => ({
      id: user._id,
      title: user.skillsOffered?.[0] || 'Skill Offering',
      teacher: user.name,
      teacherAvatar: user.profileImage || '',
      category: user.skillsOffered?.[0] || 'General',
      tags: [...(user.skillsOffered || []), ...(user.skillsWanted || [])],
      likes: Math.floor(Math.random() * 50), // mock data
      comments: Math.floor(Math.random() * 20), // mock data
      rating: (Math.random() * 1 + 4).toFixed(1), // 4.0 - 5.0
      description: user.bio || 'Passionate about sharing skills!',
      exchange: `Seeking: ${user.skillsWanted?.[0] || 'collaboration 🤝'}`
    }));

    res.status(200).json(formatted);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching explore posts', error: err });
  }
};

module.exports = { getExplorePosts };
