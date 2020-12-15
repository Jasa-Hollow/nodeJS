const http = require('http');
// Almacenamiento del módulo Express en una constante.
const express = require('express');

// ----------------------------------------------------------
// Rutas combinadas.
const homeRouter = require('./routes/home');
const blogRouter = require('./routes/blog');
const contactRouter = require('./routes/contact');
const aboutRouter = require('./routes/about');
// ----------------------------------------------------------

const path = require('path');
const server = express();

server.use(express.static(path.join(__dirname, 'public')))

// ----------------------------------------------------------
// Registrando un router en su respectiva ruta.
server.use("/", homeRouter);
server.use("/blog", blogRouter);
server.use("/about", aboutRouter);
server.use("/contact", contactRouter);
// ----------------------------------------------------------

server.listen(8080);