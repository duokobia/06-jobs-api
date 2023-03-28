const express = require("express");
const router = express.Router();

const{
    getCart,
    createCart,
    deleteAProductFromCart,
    deleteProductsFromCart
} = require("../controllers/cart");

router.route("/").get(getCart).delete(deleteProductsFromCart);
router.route("/:id").get(getCart).post(createCart).delete(deleteAProductFromCart);

module.exports = router;