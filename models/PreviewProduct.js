const { model, Schema, Types } = require("mongoose");

const PreviewProductSchema = new Schema({
  uploadedFile: { type: String, required: true },
  product: { type: Types.ObjectId, required: true, ref: "Product" },
});

module.exports = model("PreviewProduct", PreviewProductSchema);
