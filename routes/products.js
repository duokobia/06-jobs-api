const express = require("express");
const router = express.Router();

const{
    getAllProducts,
    getProductDetails,
    createProductShoppingList,
    updateProductShoppingList,
    deleteProductFromShoppingList
} = require("../controllers/products");

router.route("/").post(createProductShoppingList).get(getAllProducts);
router.route("/:id").get(getProductDetails).delete(deleteProductFromShoppingList).patch(updateProductShoppingList);

module.exports = router;