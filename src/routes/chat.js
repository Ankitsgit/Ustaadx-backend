// File: src/routes/chat.js
// const express = require('express');
// const { getMessages, sendMessage,getChatContacts } = require('../controllers/chatController');
// const protect = require('../middleware/protect');

// const router = express.Router();

// router.get('/:receiverId', protect, getMessages);
// router.post('/', protect, sendMessage);
// router.get('/contacts', protect, getChatContacts);


// module.exports = router;

// File: src/routes/chat.js

const express = require('express');
const { getMessages, sendMessage, getContacts } = require('../controllers/chatController');
const protect = require('../middleware/protect');

const router = express.Router();

router.get('/contacts', protect, getContacts); // ✅ ADD THIS
router.get('/:receiverId', protect, getMessages);
router.post('/', protect, sendMessage);

module.exports = router;
