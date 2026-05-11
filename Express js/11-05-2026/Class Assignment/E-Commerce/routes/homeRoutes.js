const express = require("express");

const { loadProductsForHome } = require("../middleware/productDataMiddleware");
const { getHomeProducts } = require("../controller/homeController");

const router = express.Router();

router.get("/products", loadProductsForHome, getHomeProducts);

module.exports = router;
