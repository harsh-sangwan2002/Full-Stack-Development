const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const connectToDB = require('./utils/db');
const productRouter = require('./routes/product.route');

const data = {
    name: "Harsh",
    age: 22
}

const performSanity = async (req, res, next) => {
    if (!req.body && !req.body.password) {
        console.log("error");
    }
    console.log("performing basic sanity");
    console.log("checked the data");
    next();
}

const checkAuth = async (req, res, next) => {
    console.log("checking for valid email");
    console.log("checked the data");
    next();
}

const middleware1 = async (req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    console.log("This is first checkout");
    next();
}

const middleware2 = async (req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    console.log("This is second checkout");
    next();
}

app.use(middleware1, middleware2);

app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send(data);
})

app.post('/login', performSanity, checkAuth, (req, res) => {
    res.send("Post request success");
})

app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log(formData);
    res.send(formData);
})

app.put('/', (req, res) => {
    res.send("Put request success")
})

app.delete('/', (req, res) => {
    res.send("Delete request success")
})

app.get('/search', (req, res) => {
    res.send(req.query);
})

app.get('/search/:id', (req, res) => {
    const id = req.params.id;
    res.send(id);
})

// Only the above api will work not this one
// app.post('/submit', (req, res) => {
//     const formData = req.body;
//     console.log(formData);
//     res.send("2: ", formData);
// })

app.use((req, res) => {
    res.send("404 Error");
})

app.listen(3000, async () => {
    console.log("Backend server is running on port 3000.");
    await connectToDB();
})