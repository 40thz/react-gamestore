const { Router } = require("express");
const previewProductController = require("../controllers/PreviewProduct");
const router = new Router();

router.get("/", previewProductController.getProducts);

module.exports = router;
