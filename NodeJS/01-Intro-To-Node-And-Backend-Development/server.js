const http = require('http');

const server = http.createServer((req, res) => {

    // Plain-text
    // res.setHeader('Content-type', 'text/plain');
    // res.write('Hello! I am Harsh.');

    // HTML
    // res.setHeader('Content-type', 'text/html');
    // res.write('<h1>Hello World</h1>');

    // JSON
    res.setHeader('Content-type', 'text/json');
    const jsonData = {
        message: "Hello World!",
        timestamp: new Date()
    }
    res.write(JSON.stringify(jsonData));

    res.end();
})

const port = 3000;
const host = "localhost";
server.listen(port, host, () => {
    console.log(`Server is running at https://${host}//${port}`);
})