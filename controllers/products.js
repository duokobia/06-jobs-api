const Product = require("../models/Product");
const {StatusCodes} = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");

// For users
const getAllProducts = async ( req, res ) => {
    const products = await Product.find({createdBy:req.user.userId}).sort("createdAt");
    res.status(StatusCodes.OK).json({products, count:products.length});
};

const getOneProduct = async ( req, res ) => {
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

const createCart = async ( req, res ) => {
    req.body.createdBy = req.user.userId;
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
};

const readCart = async ( req, res ) => {
    res.send("Displays all products in the users cart, which might be none if no product is added.")
};

const updateCart = async ( req, res ) => {
    req.body.createdBy = req.user.userId;
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
};

const deleteOneProductFromCart = async ( req, res ) => {

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

const deleteAllProductsFromCart = async ( req, res ) => {

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

const proceedToPaymentPage = async ( req, res ) => {
    // TODO 
    // Update the logic here
   
    res.send("payment page here");
};

//Admin section


const createProductInInventory = async ( req, res ) => {
    // req.body.createdBy = req.user.userId;
    // const store = await Store.create(req.body);
    // res.status(StatusCodes.CREATED).json({ store });
    res.send("Add a new product to inventory");

};

const updateProductDetailsInInventory = async ( req, res ) => {
    // const {
    //     body:{name, category, price, description},
    //     user:{userId},
    //     params:{id:storeId}
    // } = req;

    // if(name === "" || category === "" || price === "" || description === ""){
    //     throw new BadRequestError("Name, Category, Price or Description fields cannot be empty");
    // }

    // const store = await Store.findByIdAndUpdate(
    //     { _id:storeId, createdBy:userId },
    //     req.body,
    //     {new:true, runValidators:true}
    // );
    // if(!store){
    //     throw new NotFoundError(`No job with id ${storeId}`);
    // }
    // res.status(StatusCodes.OK).json({ store });

    res.send("update a product detail in inventory");

};

const deleteOneProductFromInventory = async ( req, res ) => {
    // const {
    //     body:{name, category, price, description},
    //     user:{userId},
    //     params:{id:storeId}
    // } = req;

    // const store = await Store.findByIdAndRemove({
    //     _id:storeId,
    //     createdBy:userId
    // });

    // if(!store){
    //     throw new NotFoundError(`No job with id ${storeId}`);
    // }
    // res.status(StatusCodes.OK).send();
    res.send("deletes all products in inventory");

};

const deleteAllProductFromInventory = async ( req, res ) => {
    // const {
    //     body:{name, category, price, description},
    //     user:{userId},
    //     params:{id:storeId}
    // } = req;

    // const store = await Store.findByIdAndRemove({
    //     _id:storeId,
    //     createdBy:userId
    // });

    // if(!store){
    //     throw new NotFoundError(`No job with id ${storeId}`);
    // }
    // res.status(StatusCodes.OK).send();

    res.send("deletes all products in inventory");

};

module.exports = {
    getAllProducts,
    getOneProduct,
    createCart,
    readCart,
    updateCart,
    deleteOneProductFromCart,
    deleteAllProductsFromCart,
    proceedToPaymentPage,
    createProductInInventory,
    updateProductDetailsInInventory,
    deleteOneProductFromInventory,
    deleteAllProductFromInventory

};

// Re-word the routes
// Cart (user) CRUD OPERATION

// Please note that these are different endpoints:
// getAllProducts(displays all products in the users landing page)
// getOneProduct(displays one product in the users landing page with a brief description)
// readCart(displays all products in the users cart, which might be none if no product is added.)

// checkoutPage( this proceeds to payment page that accepts payment details)
// proceedToPaymentsPage


// createCart( On click of the cart button creates a cart if none exists. Iff there is one, ignore)
// readCart (A click on the cart button fetches this endpoint just to view the cart content)
// updateCart ( add a product to cart)
// deleteOneProductFromCart
// deleteAllProductFromCart

// Inventory (Admin)CRUD OPERATION
// readOneProductInInventory( the search capabilties is used to achieve this.)
// readAllProductsInInventory( Read all the products in the inventory list) this is same as "getAllProducts"

// getOneProductsInInventory( find a product in the inventory list) this is same as "getOneProducts"
// getAllProductsInInventory( Read all the products in the inventory list and display in a table) this is same as "getAllProducts"


// createProductInInventory( Add a new product to the inventory list using a "Add Product" button)
// updateProductDetailsInInventory ( edit the details of an existing product in the inventory list using an "Edit Product" button)
// deleteProductFromInventory ( delete a product from the inventory list using a "Delete Product" button)
