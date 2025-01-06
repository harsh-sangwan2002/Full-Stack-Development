const https = require('http');
const urlObj = require('url');
const queryString = require('querystring');
const fs = require('fs');

const readStaticFile = require('./utils/serverFile');

function handleReqResponse(req, res) {
    const url = req.url;
    const method = req.method;
    let contentType = url.endsWith('.css') ? "text/css" : "text/html";

    console.log(url);

    if (url === '/dashboard' && method === "GET") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('I am in dashboard');
    }

    else if (url === '/login' && method === "POST") {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            const obj = queryString.parse(data);

            if (obj.userid === obj.pwd) {
                // Redirect to /dashboard
                res.writeHead(302, { 'Location': '/dashboard' });
                return res.end();
            } else {
                res.writeHead(401, { 'Content-Type': 'text/plain' });
                res.end('Invalid credentials');
            }
        });
    }

    else if (url.startsWith("/login?") && method === "GET") {
        const userInfo = urlObj.parse(url, true).query;
        console.log('User Info', userInfo);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        if (userInfo.userid === userInfo.pwd) {
            res.write('Welcome ' + userInfo.userid);
        } else {
            res.write('Invalid credentials');
        }
        res.end();
    }

    else {
        res.writeHead(200, { 'Content-Type': contentType });
        readStaticFile(url, res);
    }
}

// Certificates
const options = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
}
const server = https.createServer(handleReqResponse);

server.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port 3000");
    }
});
