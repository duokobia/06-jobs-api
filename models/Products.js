const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, " Please provide product name"],
        maxlength: 50
    },
    category:{
        type:String,
        required:[true, " Please provide product type"],
        maxlength: 20
    },
    price:{
        type:Number,
        required:[true, " Please provide product price"],
        maxlength: 10
    },
    description:{
        type:String,
        required:[true, " Please provide product description"],
        maxlength: 100
    },
    quantity:{
        type:Number,
        required:[true, " Please provide product quantity"],
        maxlength: 20
    },
    status:{
        type:String,
        enum:["available", "out-of-stock", "unavailable"],
        default: "out-of-stock",
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide user"]
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);