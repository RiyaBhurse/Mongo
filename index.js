const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
mongoose
    .connect('mongodb+srv://riyabhurserb:1jlXqmsxxytluM1h@cluster0.zr1nnc4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {  
        console.log('Failed to connect to MongoDB', err);
    });


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
        type: Number,
        required: true
    }
});

const productModel = mongoose.model('Products', productSchema);
app.post('/api/products', async (req, res) => {
    const body = req.body;
    const product = productModel.create({
        name: body.name,
        price: body.price,
        isInStock: body.isInStock,
        category: body.category
    });
    console.log(product);
    return res.status(201).json({message : "Product created successfully"});
});
app.listen(8002, () => {    
    console.log('Yay!!!Server started on port 8002');
});