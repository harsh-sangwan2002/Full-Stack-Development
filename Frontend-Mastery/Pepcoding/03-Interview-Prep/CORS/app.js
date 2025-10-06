const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
// app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json({ message: 'Post request received' });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});