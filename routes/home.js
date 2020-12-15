const express = require('express');
const controller = require('../controllers/home');

const router = express.Router(); // Enrutamiento.

router.get('/', controller.renderHome);

module.exports = router;