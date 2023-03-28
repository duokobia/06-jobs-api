const Order = require("../models/Order");
const {StatusCodes} = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");


const  getOrders = async ( req, res ) => {
    const orders = await Order.find({createdBy:req.user.userId}).sort("createdAt");
    res.status(StatusCodes.OK).json({orders, count:orders.length});
    // res.send("All orders placed by users");
};

const  createAnOrder = async ( req, res ) => {
    // const client = await User.find({createdBy:req.user.userId}).sort("createdAt");
    // res.status(StatusCodes.OK).json({stores, count:stores.length});
    res.send("Place an order");
};

const deleteAnOrder = async ( req, res ) => {
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
    res.send("delete an order");

};


module.exports = {
    getOrders,
    createAnOrder,
    deleteAnOrder
};