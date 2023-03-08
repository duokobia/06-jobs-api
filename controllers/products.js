const Product = require("../models/Products");
const {StatusCodes} = require("http-status-codes");

const getAllProducts = async ( req, res) => {
    res.send("get all products");
};

const getProductDetails = async ( req, res) => {
    res.send("get product details");
};

const createProductShoppingList = async ( req, res) => {
    req.body.createdBy = req.user.userId;
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
};

const updateProductShoppingList = async ( req, res) => {
    res.send("update product shipping list");
};

const deleteProductFromShoppingList = async ( req, res) => {
    res.send("delete product shipping list");
};


module.exports = {
    getAllProducts,
    getProductDetails,
    createProductShoppingList,
    updateProductShoppingList,
    deleteProductFromShoppingList
};