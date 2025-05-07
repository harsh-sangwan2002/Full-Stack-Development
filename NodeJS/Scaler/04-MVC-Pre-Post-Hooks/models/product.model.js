const mongoose = require('mongoose');

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
        default: true
    },
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
    }
}, { timestamps: true });

const ProductModel = mongoose.model('Product', productSchema);

productSchema.pre('save', function (next) {
    console.log("Pre hook runs");
})

productSchema.post('save', function (doc, next) {
    console.log("Doc updated: ", doc);
    next();
})

module.exports = ProductModel;