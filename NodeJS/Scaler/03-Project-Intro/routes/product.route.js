const productRouter = require('express').Router();

const { getAllProducts, getPrductById, createProduct, updateProductById, deleteProductById } = require('../controllers/product.controller');

productRouter.get('/', getAllProducts)
    .get('/:id', getPrductById)
    .post('/', createProduct)
    .put('/:id', updateProductById)
    .delete('/:id', deleteProductById)

module.exports = productRouter;