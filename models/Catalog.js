const { model, Schema } = require("mongoose");

const CatalogSchema = new Schema({
  uploadedFile: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = model("Catalog", CatalogSchema);
