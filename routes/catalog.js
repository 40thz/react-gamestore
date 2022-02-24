const { Router } = require("express");
const CatalogController = require("../controllers/Catalog");
const router = new Router();

router.get("/", CatalogController.getCatalog);

module.exports = router;
