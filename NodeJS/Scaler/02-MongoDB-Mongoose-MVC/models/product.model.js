const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isInStock: {
        type: Boolean,
        default: true,
    },
    category: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const productModel = mongoose.model('Product', ProductSchema);
module.exports = productModel;