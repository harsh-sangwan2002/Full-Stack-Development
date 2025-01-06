const express = require('express');
const app = express();

app.use(express.json());

app.get('/user/:id', (req, res) => {
    res.send(req.params.id);
})

app.get('/user', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
})