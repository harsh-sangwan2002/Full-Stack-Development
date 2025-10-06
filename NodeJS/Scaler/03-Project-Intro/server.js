const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const connectDB = require('./config/db');
const productRouter = require('./routes/product.route');

app.use('/api/products', productRouter);

app.listen(3000, async () => {
    console.log("Backend server is running on port 3000");
    await connectDB();
})