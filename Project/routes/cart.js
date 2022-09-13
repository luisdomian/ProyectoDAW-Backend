const express = require("express");

const { addItemToCart, removeItemToCart, getCartItems } = require("../controllers/cart");
const { userIsAuthenticated, userIsInRole } = require("../middlewares/auth")

const router = express.Router();

router.route("/add-to-cart").post(addItemToCart);
router.route("/remove-to-cart").post(removeItemToCart);
router.route("/get-items").get(getCartItems);

module.exports = router;

// userIsAuthenticated, userIsInRole, 