const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");


const authorize = async (req, res, next) => {
    // Check header
    const user = await User.findOne({ where: { id: req.user.id } });
    let isAdmin =   user.isAdmin;
    if (!isAdmin ) {
        throw new UnauthenticatedError("Access denied.");
        }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        //Attach the user to the product routes
        req.user = { userId:payload.userId, name:payload.name };
        next();
    } catch (error) {
        throw new UnauthenticatedError("Authentication invalid");
    }
};



module.exports = authorize;