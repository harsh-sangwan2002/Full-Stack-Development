const express = require('express');
const {getAllProducts,getProductByID,createProduct,updateProductById,deleteProductById} = require('../controllers/product.controller');

const productRouter = express.Router();

router.get('/',getAllProducts);
router.get('/:id',getProductByID);
router.post('/',createProduct);
router.put('/:id',updateProductById);
router.delete('/:id',deleteProductById);

module.exports = productRouter;