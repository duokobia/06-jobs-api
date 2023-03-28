const express = require("express");
const router = express.Router();
const authorizeUser = require("../middleware/authorization");

const{
    getAllProducts,
    getOneProduct,
    createCart,
    updateCart,
    deleteOneProductFromCart,
    deleteAllProductsFromCart,
    proceedToPaymentPage,
    createProductInInventory,
    updateProductDetailsInInventory,
    deleteOneProductFromInventory,
    deleteAllProductFromInventory
} = require("../controllers/products");

router.route("/").get(getAllProducts).post(createCart).delete(deleteAllProductsFromCart);
router.route("/:id").get(getOneProduct).patch(updateCart).delete(deleteOneProductFromCart);
router.route("/store").get(getAllProducts).post(authorizeUser, createProductInInventory).delete(authorizeUser, deleteAllProductFromInventory);
router.route("/store:id").get(getOneProduct).patch(authorizeUser, updateProductDetailsInInventory).delete(authorizeUser, deleteOneProductFromInventory);

module.exports = router;