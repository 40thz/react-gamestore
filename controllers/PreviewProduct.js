const PreviewProductModel = require("../models/PreviewProduct");
const ProductModel = require("../models/Product");

class ProductController {
  getProducts = async (req, res) => {
    try {
      const background = await PreviewProductModel.find();
      const products = await ProductModel.find();

      const bgWithProduct = background.map(bg => {
        const product = products.filter((item) => parseInt(item._id) === parseInt(bg.product))[0]

        return {
          bg: bg.uploadedFile,
          product: {
            price: product.price,
            name: product.name
          },
        };
      })

      res.status(200).json(bgWithProduct);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  };
}

module.exports = new ProductController();
