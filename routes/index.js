const buildAdminRouter = require('./admin')
const catalogRouter = require("./catalog")
const categoryRouter = require("./category")
const productRouter = require("./product")
const previewProductRouter = require("./previewProduct");

module.exports = {
  buildAdminRouter,
  catalogRouter,
  categoryRouter,
  productRouter,
  previewProductRouter,
};
