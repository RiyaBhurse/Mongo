const express = require('express');
const router = require('express').Router();
const productController = require('../controllers/productController');

//create
router.post('/', productController.createProducts);

//get 
router.get('/', productController.getallProducts);

//get by id
router.get('/:id', productController.getById);

//put
router.put('/:id', productController.updateProduct);

//delete
router.delete('/:id', productController.deleteProduct);

module.exports = router;