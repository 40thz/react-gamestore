const { Router } = require("express");
const ProductController = require("../controllers/Product");
const router = new Router();

router.get("/:id", ProductController.getProductById);
router.get("/", ProductController.getProducts);
module.exports = router;
