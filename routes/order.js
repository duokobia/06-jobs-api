const express = require("express");
const router = express.Router();

const{
    getOrders,
    createAnOrder,
    deleteAnOrder
} = require("../controllers/order");

router.route("/").get(getOrders);
router.route("/:id").post(createAnOrder).delete(deleteAnOrder);

module.exports = router;