const express = require('express');
const app = express();

// It parses the incoming JSON and makes it available in req.body
app.use(express.json());

// Serves static files from the 'public' directory
app.use(express.static('public'));

const middleware1 = async (req, res, next) => {
    console.log("This is middleware 1");
    next();
}
const middleware2 = async (req, res, next) => {
    console.log("This is middleware 2");
    next();
}

app.use(middleware1);
app.use(middleware2);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/login', (req, res) => {
    console.log(req.body);
    res.send('Login Page');
})

// path params
app.get('/profile/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Profile Page of ${username}`);
})

// query params
app.get('/search', (req, res) => {
    const query = req.query;
    res.send(`Search Results for ${query}`);
    // res.send("Search Results");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})