const productsJson = require("../products.json");
const Product = require("../models/Product");

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};


exports.getAllProducts = asyncHandler(async (req, res) => {
  const source = (req.query.source || "").toLowerCase();

  try {
    if (source === "json") {
      return res.status(200).json({
        success: true,
        source: "json",
        total: productsJson.length,
        data: productsJson,
      });
    }

    const dbProducts = await Product.find({}).sort({ id: 1 }).lean();

    if (dbProducts.length > 0) {
      return res.status(200).json({
        success: true,
        source: "database",
        total: dbProducts.length,
        data: dbProducts,
      });
    }

    return res.status(200).json({
      success: true,
      source: "json-fallback",
      total: productsJson.length,
      data: productsJson,
    });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error.message,
    });
  }
});

// Get product by ID
exports.getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const source = (req.query.source || "").toLowerCase();

  try {
    // Parse the ID to number
    const productId = parseInt(id, 10);

    if (isNaN(productId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID format",
      });
    }

    // Try to fetch from database first (if not forced to use JSON)
    if (source !== "json") {
      const dbProduct = await Product.findOne({ id: productId }).lean();

      if (dbProduct) {
        return res.status(200).json({
          success: true,
          source: "database",
          data: dbProduct,
        });
      }
    }

    // Search in JSON data
    const jsonProduct = productsJson.find((p) => p.id === productId);

    if (jsonProduct) {
      return res.status(200).json({
        success: true,
        source: source === "json" ? "json" : "json-fallback",
        data: jsonProduct,
      });
    }

    // Product not found
    return res.status(404).json({
      success: false,
      message: `Product with ID ${id} not found`,
    });
  } catch (error) {
    console.error("Error fetching product by ID:", error.message);
    res.status(500).json({
      success: false,
      message: "Error fetching product",
      error: error.message,
    });
  }
});
