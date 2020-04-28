const http = require('http');

const port = 8888;

const app = http.createServer((request, response) => {
    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('Hello World!!!');
    } else if (request.url === '/json') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ hello: 'world' }));
    }
});

app.listen(port, 'localhost');