const express = require('express');
const mongoose = require('mongoose');

const connectDB = require('./config/db');
const productRouter = require('./routes/product.router');
const userRouter = require('./routes/user.router');

const app = express();
app.use(express.json());

// Routes
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Welcome to the home page." });
})

app.use((req, res) => {
    res.status(404).json({ message: "Page not found." });
})

connectDB();

app.listen(8080, () => {
    console.log("Backend server is running.")
})