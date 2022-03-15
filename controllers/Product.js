const ProductModel = require("../models/Product");

class ProductController {
  getProductByCategoryId = async (req, res) => {
    try {
      const items = await ProductModel.find({ category: req.params.id });
      const itemsWithPrice = []
      
      const calculateDiscount = (item) => {
        const calculate = item.price - item.price * item.discount / 100

        let generatePriceWithDiscount = {
          ...item._doc,
          priceWithDiscount: parseInt(calculate)
        }

        itemsWithPrice.push(generatePriceWithDiscount)
      }  

      items.forEach(item => {
        item.discount ? calculateDiscount(item) : itemsWithPrice.push(item)
      })

      res.status(200).json(itemsWithPrice);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  };

  getProducts = async (req, res) => {
    try {
      const item = await ProductModel.find();
      res.status(200).json(item);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  };

  getProductById = async (req, res) => {
    try {
      let item = await ProductModel.findOne({ _id: req.params.id });

      if(item.discount) {
        const calculate = item.price - item.price * item.discount / 100

        item = {
          ...item._doc,
          priceWithDiscount: parseInt(calculate)
        }
      }

      res.status(200).json(item);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  };
}

module.exports = new ProductController();
