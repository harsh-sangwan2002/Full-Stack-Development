const productRouter = require('express').Router();
const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/product.controller');

productRouter.get('/', getAllProducts)
    .get('/:id', getProductById)
    .post('/', createProduct)
    .put('/:id', updateProduct)
    .delete('/:id', deleteProduct);

module.exports = productRouter;