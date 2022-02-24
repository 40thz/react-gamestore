const { Router } = require("express");
const ProductController = require("../controllers/Product");
const router = new Router();

router.get("/:id", ProductController.getProduct);

module.exports = router;
