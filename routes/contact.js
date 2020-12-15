import express from 'express';
import controller from '../controllers/contact.js';
import bodyParser from 'body-parser';
import { parseBody } from '../middleware/middleware.js'

const router = express.Router(); // Enrutamiento.

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', controller.renderContact);
router.post('/', controller.contact);

export default router;