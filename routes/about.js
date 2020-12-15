import express from 'express';

import controller from '../controllers/about.js';

const router = express.Router(); // Enrutamiento.

router.get('/', controller.renderAbout);

export default router;