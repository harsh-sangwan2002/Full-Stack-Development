const ProductModel = require("../models/product.model");

// Get all products
const getAllProducts = async (req, res) => {
    const products = await ProductModel.find();

    res.json({
        message: "Products fetched successfully",
        products
    })
}

// Get product by id
const getPrductById = async (req, res) => {
    const { id } = req.params;
    const product = await ProductModel.findById(id);

    if (!product)
        res.status(404).json({
            message: "Product not found"
        })

    else
        res.status(200).json({
            message: "Product fetched successfully",
            product
        })
}

// Create new product
const createProduct = async (req, res) => {
    const { name, price, isInStock, category } = req.body;
    const newProduct = await ProductModel.create({ name, price, isInStock, category });

    res.json({
        message: "Product created successfully",
        product: newProduct
    })
}

// Update product by id
const updateProductById = async (req, res) => {
    const { id } = req.params;
    const { name, price, isInStock, category } = req.body;

    const updatedProduct = await ProductModel.findByIdAndUpdate(id, { name, price, isInStock, category }, { new: true });

    if (!updatedProduct)
        res.status(404).json({
            message: "Product not found"
        })

    else
        res.status(200).json({
            message: "Product updated successfully",
            product: updatedProduct
        })
}

// Delete product by id
const deleteProductById = async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct)
        res.status(404).json({
            message: "Product not found"
        })

    else
        res.status(200).json({
            message: "Product deleted successfully",
            product: deletedProduct
        })
}

module.exports = {
    getAllProducts,
    getPrductById,
    createProduct,
    updateProductById,
    deleteProductById
}