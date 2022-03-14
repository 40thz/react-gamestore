const { Router } = require("express");
const ProductController = require("../controllers/Product");
const router = new Router();

router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProductByCategoryId);
router.get("/byid/:id", ProductController.getProductById);
module.exports = router;
