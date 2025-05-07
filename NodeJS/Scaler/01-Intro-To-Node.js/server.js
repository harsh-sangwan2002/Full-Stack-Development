const http = require('http');

const data = {
    name: "Alex",
    id: 1,
    address: {
        state: "New Delhi",
        country: "India"
    },
    hobbies: [
        "singing",
        "reading",
        "dancing"
    ]
}

const server = http.createServer((req, res) => {

    // res.setHeader('Content-Type', 'text/html');
    // res.write("<h1>Hello World!</h1>");
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
})

server.listen(3000, () => {
    console.log("Server is running on port 3000.");
})