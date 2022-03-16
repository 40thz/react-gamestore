const { model, Schema, Types } = require("mongoose");

const ProductSchema = new Schema({
  uploadedFile: { type: String, required: true },
  category: { type: Types.ObjectId, required: true, ref: "Category" },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number },
  description: { type: String, required: true },
  gallery: [ { type: String } ],
  videoTrailer: { type: String },
  service: { type: String },
  language: { type: String },
  activationRegion: { type: String },
  platform: { type: String },
  releaseDate: { type: Date },
  publisher: { type: String },
  developer: { type: String },
  stock: { type: Boolean },
  raiting: { type: Number, default: 5 },
});

module.exports = model("Product", ProductSchema);
