const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, " Please provide product name"],
        maxlength: 50
    },
    image:{
        type:String,
        required:[false, " Please upload a product image"], 
    },
    category: {
        type: [{
            type: String,
            enum: ["flowers", "fruits"]
        }],
        default: ["flowers"]
    },
    price:{
        type:Number,
        required:[true, " Please provide product price"],
        maxlength: 10
    },
    description:{
        type:String,
        required:[true, " Please provide product description"]
    },
    countInStock:{
        type:Number,
        required:[true, " Please provide product quantity"],
        default: 0
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
}, 
{ 
    timestamps: true
}
);

module.exports = mongoose.model("Product", ProductSchema);