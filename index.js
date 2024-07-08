const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
require('dotenv').config()
mongoose
    .connect(
        process.env.MONGO_URL 
    )
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {  
        console.log('Failed to connect to MongoDB', err);
    });

// //Product Schema
// const productSchema = new mongoose.Schema({ 
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: String,
//         required: true
//     },
//     isInStock: {
//         type: Boolean,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     }
// });

// const productModel = mongoose.model('Products', productSchema);

// //create
// app.post('/api/products', async (req, res) => {
//     const body = req.body;
//     const product = productModel.create({
//         name: body.name,
//         price: body.price,
//         isInStock: body.isInStock,
//         category: body.category
//     });
//     console.log(product);
//     return res.status(201).json({message : "Product created successfully"});
// });

// //get 
// app.get('/api/products', async (req, res) => {
//     const allProducts = await productModel.find({});
//     return res.json(allProducts);
// })

// //get by id
// app.get('/api/products/:id', async (req, res) => {
//     const product = await productModel.findById(req.params.id);
//     return res.json(product);
// })

// //put
// app.put('/api/products/:id', async (req, res) => {
//     const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body);
//     return res.json(updatedProduct);
// })

// //delete
// app.delete('/api/products/:id', async (req, res) => {
//     const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
//     return res.json(deletedProduct);
// })



app.listen(8004, () => {    
    console.log('Yay!!!Server started on port 8004');
});