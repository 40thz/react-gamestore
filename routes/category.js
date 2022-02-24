const { Router } = require("express");
const CategoryController = require("../controllers/Category");
const router = new Router();

router.get("/:id", CategoryController.getCategory);

module.exports = router;
