const Cart = require("../models/Cart");
const {StatusCodes} = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");


const  getCart = async ( req, res ) => {
    const {
        params:{ _id: userId }
    } = req;
    const cart = await Cart.findOne({_id: userId}).sort("createdAt");
    if(cart && cart.products.length > 0){
        res.status(StatusCodes.OK).json({cart});
    } else {
        res.status(StatusCodes.OK).json({msg:"There is no item in your cart at the moment!"}); 
    }
};

const  createCart = async ( req, res ) => {
    // const client = await User.find({createdBy:req.user.userId}).sort("createdAt");
    // res.status(StatusCodes.OK).json({stores, count:stores.length});
    res.send("Add a new product to cart for user");
};

const deleteAProductFromCart = async ( req, res ) => {

    const {
        params:{id:productId}
    } = req;

    let cart = await Cart.findOne({_id: productId});

    const product = await Product.findByIdAndRemove({
        _id:productId,
        createdBy:userId
    });

    if(!product){
        throw new NotFoundError(`No product with id ${productId}`);
    }
    res.status(StatusCodes.OK).send("delete a product from cart");

};

const deleteProductsFromCart = async ( req, res ) => {

    

    let cart = await Cart.find({_id: productId});

    const product = await Product.findByIdAndRemove({
        _id:productId,
        createdBy:userId
    });

    if(!product){
        throw new NotFoundError(`No product with id ${productId}`);
    }
    res.status(StatusCodes.OK).send("delete all products from cart");

};


module.exports = {
    getCart,
    createCart,
    deleteAProductFromCart,
    deleteProductsFromCart
};