const mongoose = require("mongoose");

// Create a schema
const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    product_price: {
        type: String,
        required: true,
    },
    isInStock: {
        type: Boolean,
        required: true,
    },
    category: {
        type: [String],
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 8,
        validate: {
            validator: function () {
                return this.password === this.confirmPassword;
            },
            message: "Password and confirm password should be same"
        }
    }
}, { timestamps: true })

const validCategories = ["Electronics", "Appliances", "Furniture", "Fashion"];

productSchema.pre("save", function (next) {

    console.log("pre save hook called.");
    const invalidCategories = this.category.filter(cat => {
        !validCategories.includes(cat);
    })

    console.log("Invalid categories: ", invalidCategories);

    if (!invalidCategories.length)
        return next(new Error("Invalid category"));

    else
        next();
})

// pre hook -> making confirmPassword undefined
productSchema.pre("save", function () {
    this.confirmPassword = undefined;
})

const productModel = mongoose.model('Products', productSchema);

module.exports = productModel;