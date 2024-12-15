const http = require('http');
const readStaticFile = require('./utils/serverFile');

function handleReqResponse(req, res) {

    const url = req.url;
    let contentType = url.endsWith('.css') ? "text/css" : "text/html";

    console.log(url);

    if (url.startsWith("/login?")) {
        res.write('Login');
        res.end();
    }

    else {
        res.writeHead(200, { 'Content-Type': contentType });
        readStaticFile(url, res);
    }

    // res.write('<h1>Hello Client</h1>');
    // res.end();
}

const server = http.createServer(handleReqResponse);
const serverObj = server.listen(3000, (err) => {
    if (err)
        console.log(err);

    else
        console.log("Server is running on 3000 port ", serverObj.address().port);
})