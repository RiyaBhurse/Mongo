const express = require('express');
const router = require('express').Router();
const productController = require('../controllers/productController');
//create
router.post('/api/products', productController.createProducts);

//get 
router.get('/api/products', productController.getallProducts);

//get by id
router.get('/api/products/:id', productController.getById);

//put
router.put('/api/products/:id', productController.updateProduct);

//delete
router.delete('/api/products/:id', productController.deleteProduct);
