const express = require('express');
const app = express();

// Create an express app
app.use(express.json()) // middleware

app.get('/', (req, res) => {
    res.send('Hello Express!');
})

app.get('/about', (req, res) => {
    res.send('This is about page.');
})

app.post('/data', (req, res) => {

    console.log(req.body);
    res.send("This is post request.");
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
})