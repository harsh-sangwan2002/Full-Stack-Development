const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/login') {
        res.setHeader('Content-Type', 'application/json');
        const jsonData = {
            "username": "admin",
            "password": "admin"
        }
        res.write(JSON.stringify(jsonData));
        res.end();
    }

    else {
        res.setHeader('Content-Type', 'text/html');
        const htmlData = fs.readFileSync('./index.html', 'utf-8');
        res.write(htmlData);
        res.end();
    }
})

server.listen(3000, 'localhost', () => {
    console.log("Backend server is running on port 3000");
})