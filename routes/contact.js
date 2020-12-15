import express from 'express';
import controller from '../controllers/contact.js';
import { parseBody } from '../middleware/middleware.js'

const router = express.Router(); // Enrutamiento.

router.get('/', controller.renderContact);
router.use(parseBody);
router.post('/', controller.contact);

export default router;