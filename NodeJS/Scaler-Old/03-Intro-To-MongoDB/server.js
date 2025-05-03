const express = require('express');
const mongoose = require('mongoose');

const Mongo_URL = "mongodb://hsangwan2002:samay229@cluster0-shard-00-00.49hcb.mongodb.net:27017,cluster0-shard-00-01.49hcb.mongodb.net:27017,cluster0-shard-00-02.49hcb.mongodb.net:27017/?ssl=true&replicaSet=atlas-xdd8ls-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
const app = express();

app.use(express.json());

// Connection with MongoDB
mongoose.connect(Mongo_URL).then(connection => {
    console.log("Connected to MongoDB.");
}).catch(err => {
    console.log(err);
})

app.get('/api/products', async function (req, res) {

    const allProducts = await productModel.find();
    // const product = await productModel.findOne({category:"Electronics"});

    console.log("All products are: ", allProducts);
    res.status(201).json({ message: "Fetched all the products.", products: allProducts });
})

app.get('/api/products/:id', async function (req, res) {

    const id = req.params.id;
    const product = await productModel.findById(id);
    res.status(200).json({ product });
})

app.post('/api/products', async function (req, res) {

    const { product_name, product_price, category, isInStock, password, confirmPassword } = req.body;
    // console.log(body);

    try {
        const product = await productModel.create({
            product_name,
            product_price,
            category,
            isInStock,
            password,
            confirmPassword,
        });

        console.log("Product: ", product);
        res.status(200).json({ message: "Product created succcessfully." });
    } catch (err) {
        console.log("Error is: ", err);
        return res.status(400).json({ message: err.message });
    }
})

app.put('/api/products/:id', async function (req, res) {

    const product = await productModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Updated product: ", product });
})

app.delete('/api/products/:id', async function (req, res) {

    const deleteProduct = await productModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Delete product successfully", deleteProduct });
})

app.listen(8080, () => {
    console.log(`Backend server is running on port 8080.`)
})