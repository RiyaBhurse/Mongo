const productModel = require('../models/product');

exports.createProducts = async (req, res) => {
    const body = req.body;
    const product = productModel.create({
        name: body.name,
        price: body.price,
        isInStock: body.isInStock,
        category: body.category
    });
    console.log(product);
    return res.status(201).json({message : "Product created successfully"});
}

exports.getallProducts =  async (req, res) => {
    const allProducts = await productModel.find({});
    return res.json(allProducts);
}

exports.getById = async (req, res) => {
    const product = await productModel.findById(req.params.id);
    return res.json(product);
}

exports.updateProduct = async (req, res) => {
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json(updatedProduct);
}

exports.deleteProduct =   async (req, res) => {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
    return res.json(deletedProduct);
}