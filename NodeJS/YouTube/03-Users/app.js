const express = require('express');
const app = express();

app.use(express.json());

let users = {};

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log(req.body);
    users = req.body.name;
    res.json({
        message: "Data received successfully.",
        user: req.body
    })
})

app.patch('/users', (req, res) => {
    console.log(req.body);

    const datatoBeUpdated = req.body;
    for (let key in datatoBeUpdated) {
        users[key] = datatoBeUpdated[key];
    }

    res.json({
        message: "Data updated successfully.",
        user: req.body
    })
})

app.delete('/users', (req, res) => {
    users = {};
    res.json({
        message: "Data deleted successfully.",
        user: users
    })
})

app.listen(3000, () => {
    console.log("Backend server is running.");
})