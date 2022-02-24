const ProductModel = require("../models/Product");

class ProductController {
  getProduct = async (req, res) => {
    try {
      const item = await ProductModel.find({ category: req.params.id });
      res.status(200).json(item);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  };
}

module.exports = new ProductController();
