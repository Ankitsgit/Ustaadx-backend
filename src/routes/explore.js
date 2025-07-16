// routes/explore.js
const express = require('express');
const router = express.Router();
const { getExplorePosts } = require('../controllers/exploreController');

router.get('/', getExplorePosts);

module.exports = router;
