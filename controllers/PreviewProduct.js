const PreviewProductModel = require("../models/PreviewProduct");
const ProductModel = require("../models/Product");

class ProductController {
  getProducts = async (req, res) => {
    try {
      const background = await PreviewProductModel.find();

      res.status(200).json(background);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  };
}

module.exports = new ProductController();
