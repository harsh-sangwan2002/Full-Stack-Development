const express = require('express');
const mongoose = require('mongoose');

const Mongo_URL = "mongodb+srv://hsangwan2002:Samay%40229@cluster0.49hcb.mongodb.net/"
const app = express();

app.use(express.json());

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isInStock: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    },
}, { timestamps: true });

const ProductModel = mongoose.model('Product', productSchema);


app.get('/', (req, res) => {
    res.send("Welcome to our E-commerce");
})

app.get('/api/product/:id', async (req, res) => {
    const id = req.params.id;
    const product = await ProductModel.findById(id);
    console.log(product);
    res.send(product);
})

app.post('/api/products', async (req, res) => {
    const product = req.body;
    const savedProduct = await ProductModel.create(product);
    console.log(savedProduct);
    res.send("Product added successfully");
})

app.put('/api/product/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const product = await ProductModel.findByIdAndUpdate(id, body);
    console.log(product);
    res.send(product);
})

app.listen(8080, async () => {
    console.log(`Backend server is running on port 8080.`)
    // Connection with MongoDB
    try {
        await mongoose.connect(Mongo_URL)
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
})