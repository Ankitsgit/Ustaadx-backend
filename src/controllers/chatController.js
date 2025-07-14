
// File: src/controllers/chatController.js
const Message = require('../models/Message'); // ✅ CommonJS

const getMessages = async (req, res) => {
  const { receiverId } = req.params;
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user.id, receiver: receiverId },
        { sender: receiverId, receiver: req.user.id }
      ]
    }).sort('createdAt');

    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const sendMessage = async (req, res) => {
  const { receiverId, content } = req.body;
  try {
    const message = await Message.create({
      sender: req.user.id,
      receiver: receiverId,
      content
    });

    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Export controller methods using CommonJS
module.exports = {
  getMessages,
  sendMessage
};
