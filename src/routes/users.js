
// File: src/routes/users.js
const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const protect = require('../middleware/protect');

const router = express.Router();

router.get('/', protect, getAllUsers);

module.exports = router;
