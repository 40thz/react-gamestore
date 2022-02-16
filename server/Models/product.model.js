const { Schema, model } = require('mongoose')

const Product = new Schema({
  categoryId: { type: String, required: true },
  categoryName: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  image: { type: String },
  price: { type: Number }
})

module.exports = model('Product', Product)
