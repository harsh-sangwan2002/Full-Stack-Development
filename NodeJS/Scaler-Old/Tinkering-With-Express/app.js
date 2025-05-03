const express = require('express');
const app = express();

app.use(express.json());

const router = require('./routes/login.route');

app.use('/api', router);

app.get('/api/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.json({ message: id });
})

app.listen(3000, () => {
    console.log("Backend server is running.");
})