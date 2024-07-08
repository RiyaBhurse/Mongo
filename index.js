const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
require('dotenv').config()
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
mongoose
    .connect(
        process.env.MONGO_URL 
    )
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {  
        console.log('Failed to connect to MongoDB', err);
    });

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(8004, () => {    
    console.log('Yay!!!Server started on port 8004');
});