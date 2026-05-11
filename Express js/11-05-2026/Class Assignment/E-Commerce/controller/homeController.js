exports.getHomeProducts = (req, res) => {
  const products = req.products || [];

  res.status(200).json({
    success: true,
    source: req.productsSource || "unknown",
    total: products.length,
    data: products,
  });
};
