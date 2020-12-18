import express from 'express';
import controller from '../controllers/home.js';

const router = express.Router(); // Enrutamiento.

router.get('/', controller.renderHome);

export default router;