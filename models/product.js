const { mongo } = require("mongoose");
const mongoose = require("mongoose");
//Product Schema
const productSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    isInStock: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});
const productModel = mongoose.model('Products', productSchema);

module.exports = mongoose.model('Products', productSchema);