const productModel = require('../models/product.model');

const getAllProducts = async function (req, res) {

    const allProducts = await productModel.find();
    // const product = await productModel.findOne({category:"Electronics"});

    console.log("All products are: ", allProducts);
    res.status(201).json({ message: "Fetched all the products.", products: allProducts });
}

const getProductByID = async function (req, res) {

    const id = req.params.id;
    const product = await productModel.findById(id);
    res.status(200).json({ product });
}

const createProduct = async function (req, res) {
    const { product_name, product_price, category, isInStock, password, confirmPassword } = req.body;
    const newProduct = await productModel.create({
        product_name,
        product_price,
        category,
        isInStock,
        password,
        confirmPassword
    })

    res.status(201).json({ message: "Product created successfully.", newProduct });
}

const updateProductById = async function (req, res) {   
    const product = await productModel.findByIdAndUpdate(req
        .params.id, req.body);  
    res.status(200).json({ message: "Updated product: ", product });
}

const deleteProductById = async function (req, res) {   
    const deleteProduct = await productModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Delete product successfully", deleteProduct });
}   

module.exports = {
    getAllProducts,
    getProductByID,
    createProduct,
    updateProductById,
    deleteProductById,
}