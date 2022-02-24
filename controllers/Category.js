const CategoryModel = require("../models/Category");

class CategoryController {
  getCategory = async (req, res) => {
    try {
      const item = await CategoryModel.find({ catalog: req.params.id});
      res.status(200).json(item);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  };
}

module.exports = new CategoryController();
