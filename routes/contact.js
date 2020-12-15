import express from 'express';
import controller from '../controllers/contact.js';

const router = express.Router(); // Enrutamiento.

router.get('/', controller.renderContact);

export default router;