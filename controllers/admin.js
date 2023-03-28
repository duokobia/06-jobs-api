const User = require("../models/User");
const {StatusCodes} = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");


const  getAllUsers = async ( req, res ) => {
    const users = await User.find();
    res.status(StatusCodes.OK).json({ users });
};

const  getAUser = async ( req, res ) => {

    const {
        params:{ id:userId }
    } = req;

    const user = await User.findOne({ _id: userId,});

    if(!user){
        throw new NotFoundError(`No user with id ${userId}`);
    }
    res.status(StatusCodes.OK).json({ user });
};

module.exports = {
    getAllUsers,
    getAUser
};