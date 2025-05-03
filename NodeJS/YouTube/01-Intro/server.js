const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let path = "./views";

    switch (req.url) {
        case "/":
            path += "/index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "/about.html";
            res.statusCode = 200;
            break;
        case "/about-me":
            res.statusCode = 302;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
    }

    // res.setHeader('Content-type', 'text/html');

    fs.readFile(path, (err, data) => {

        if (err)
            res.end(err);

        else
            res.end(data);
    })
})

server.listen(3000, () => {
    console.log("Backend server is running.");
})