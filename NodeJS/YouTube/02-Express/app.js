const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
})

// Redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about');
})

app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname });
})

app.listen(3000, () => {
    console.log("Backend server is running.");
})