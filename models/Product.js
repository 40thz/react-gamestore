const { model, Schema, Types } = require("mongoose");

const ProductSchema = new Schema({
  uploadedFile: { type: String, required: true},
  category: { type: Types.ObjectId, required: true, ref: "Category" },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  raiting: { type: Number, default: 5 },
});

module.exports = model("Product", ProductSchema);
