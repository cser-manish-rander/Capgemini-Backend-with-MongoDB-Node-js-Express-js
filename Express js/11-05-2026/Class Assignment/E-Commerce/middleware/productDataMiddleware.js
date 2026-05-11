const Product = require("../models/Product");
const productsJson = require("../products.json");

exports.loadProductsForHome = async (req, res, next) => {
  try {
    const source = (req.query.source || "").toLowerCase();

    if (source === "json") {
      req.products = productsJson;
      req.productsSource = "json";
      return next();
    }

    const dbProducts = await Product.find({}).sort({ id: 1 }).lean();

    if (dbProducts.length > 0) {
      req.products = dbProducts;
      req.productsSource = "database";
      return next();
    }

    req.products = productsJson;
    req.productsSource = "json-fallback";
    return next();
  } catch (error) {
    console.error("Error loading products for home route:", error.message);
    req.products = productsJson;
    req.productsSource = "json-fallback-error";
    return next();
  }
};
