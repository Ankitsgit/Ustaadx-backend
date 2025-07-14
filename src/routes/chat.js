// File: src/routes/chat.js
const express = require('express');
const { getMessages, sendMessage } = require('../controllers/chatController');
const protect = require('../middleware/protect');

const router = express.Router();

router.get('/:receiverId', protect, getMessages);
router.post('/', protect, sendMessage);

module.exports = router;

