const Product = require("../models/productModel.js");

const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});
        response.status(200).json(products);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const getProduct = async (request, response) => {
    try {
        const { id } = request.params;
        const products = await Product.findById(id);
        response.status(200).json(products);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const createProduct = async (request, response) => {
    try {
        const product = await Product.create(request.body);
        response.status(200).json(product);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const updateProduct = async (request, response) => {
    try {
        const { id } = request.params;
        const product = await Product.findByIdAndUpdate(id, request.body);

        if (!product) {
            return response.status(404).json({ message: "Product Not Found" });
        }

        const updateProduct = await Product.findById(id);
        response.status(200).json(updateProduct);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (request, response) => {
    try {
        const { id } = request.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return response.status(404).json({ message: "Product Not Found" });
        }

        response.status(200).json({
            message: "Product deleted",
        });
    } catch {
        response.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
};
