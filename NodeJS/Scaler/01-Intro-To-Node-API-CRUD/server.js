const http = require('http');
const fs = require('fs');

const server = http.createServer(async (req, res) => {

    res.setHeader('Content-Type', 'text/html');
    const html = await fs.promises.readFile('index.html');
    res.write(html);
    res.end();
})

server.listen(3000, 'localhost', (err) => {
    if (err)
        console.log(err);

    else
        console.log("Backend server is running on port 3000.");
})