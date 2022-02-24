const { model, Schema, Types } = require("mongoose");

const CategorySchema = new Schema({
  uploadedFile: { type: String, required: true },
  catalog: { type: Types.ObjectId, required: true, ref: "Catalog" },
  name: { type: String, required: true },
});

module.exports = model("Category", CategorySchema);
