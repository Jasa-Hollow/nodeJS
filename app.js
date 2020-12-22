// ----------------------------------------------------------
// Almacenamiento de los módulos.
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
// ----------------------------------------------------------

// ----------------------------------------------------------
// Módulo de la conexión a la base de datos de MongoDB.
import { connectDB } from './config/db.js';
// Rutas combinadas.
import homeRouter from './routes/home.js';
import blogRouter from './routes/blog.js';
import contactRouter from './routes/contact.js';
import aboutRouter from './routes/about.js';
// ----------------------------------------------------------

dotenv.config();
connectDB();
const server = express();

// Middleware
server.use(express.static(path.join(process.cwd(), 'public')))

server.set('views', path.join(process.cwd(), "views"));
server.set('view engine', 'ejs');

// ----------------------------------------------------------
// Registrando un router en su respectiva ruta.
server.use("/", homeRouter);
server.use("/blog", blogRouter);
server.use("/about", aboutRouter);
server.use("/contact", contactRouter);
// ----------------------------------------------------------

server.listen(8080);