const buildAdminRouter = require('./admin')
const catalogRouter = require("./catalog")
const categoryRouter = require("./category")
const productRouter = require("./product")

module.exports = {
  buildAdminRouter,
  catalogRouter,
  categoryRouter,
  productRouter,
};
