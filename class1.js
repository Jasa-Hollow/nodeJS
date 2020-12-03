const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type": "text/plain"})
    res.write("Hola me llamaste??");
    res.end();
});

server.listen(7777);