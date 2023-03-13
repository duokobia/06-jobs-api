const Product = require("../models/Products");
const {StatusCodes} = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");

const getAllProducts = async ( req, res ) => {
    const products = await Product.find({createdBy:req.user.userId}).sort("createdAt");
    res.status(StatusCodes.OK).json({products, count:products.length});
};

const getProductDetails = async ( req, res ) => {
    const {
        user:{ userId },
        params:{ id:productId }
    } = req;

    const product = await Product.findOne({
        _id: productId,
        createdBy: userId
    });

    if(!product){
        throw new NotFoundError(`No job with id ${productId}`);
    }
    res.status(StatusCodes.OK).json({ product });
};

const createProductShoppingList = async ( req, res ) => {
    req.body.createdBy = req.user.userId;
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
};

const updateProductShoppingList = async ( req, res ) => {
    const {
        body:{name, category, price, description},
        user:{userId},
        params:{id:productId}
    } = req;

    if(name === "" || category === "" || price === "" || description === ""){
        throw new BadRequestError("Name, Category, Price or Description fields cannot be empty");
    }

    const product = await Product.findByIdAndUpdate(
        { _id:productId, createdBy:userId },
        req.body,
        {new:true, runValidators:true}
    );
    if(!product){
        throw new NotFoundError(`No job with id ${productId}`);
    }
    res.status(StatusCodes.OK).json({ product });
};

const deleteProductFromShoppingList = async ( req, res ) => {
    const {
        body:{name, category, price, description},
        user:{userId},
        params:{id:productId}
    } = req;

const product = await Product.findByIdAndRemove({
    _id:productId,
    createdBy:userId
});

if(!product){
    throw new NotFoundError(`No job with id ${productId}`);
}
res.status(StatusCodes.OK).send();
};


module.exports = {
    getAllProducts,
    getProductDetails,
    createProductShoppingList,
    updateProductShoppingList,
    deleteProductFromShoppingList
};