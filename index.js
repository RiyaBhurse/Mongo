const express = require('express');
const mongoose = require('mongoose');
mongoose
    .connect('mongodb+srv://riyabhurserb:1jlXqmsxxytluM1h@cluster0.zr1nnc4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {  
        console.log('Failed to connect to MongoDB', err);
    });
const app = express();
app.listen(8080, () => {    
    console.log('Yay!!!Server started on port 8080');
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