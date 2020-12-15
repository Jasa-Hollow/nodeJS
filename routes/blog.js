import express from 'express';
import controller from '../controllers/blog.js';

const router = express.Router(); // Enrutamiento.

router.get('/', controller.renderBlog);

export default router;