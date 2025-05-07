const express = require('express');
const app = express();

app.use(express.json());

const connectDB = require('./config/db');

const { getAllProducts, getPrductById, createProduct, updateProductById, deleteProductById } = require('./controllers/product.controller');

app.get('/api/products', getAllProducts);

app.get('/api/products/:id', getPrductById);

app.post('/api/products', createProduct);

app.put('/api/products/:id', updateProductById);

app.delete('/api/products/:id', deleteProductById);

app.listen(3000, async () => {
    console.log("Backend server is running on port 3000");
    await connectDB();
})