const express = require("express");
const router = express.Router();

const{
    getAllUsers,
    getAUser
} = require("../controllers/admin");

router.route("/").get(getAllUsers);
router.route("/:id").get(getAUser);

module.exports = router;