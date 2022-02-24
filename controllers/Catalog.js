const CatalogModel = require("../models/Catalog");

class CatalogController {
  getCatalog = async (req, res) => {
    try {
      const item = await CatalogModel.find();
      res.status(200).json(item);
    } catch (error) {
      res.status(500);
      throw new Error(error.message);
    }
  };
}

module.exports = new CatalogController();
