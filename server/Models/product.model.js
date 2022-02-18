const { Schema, model, Types } = require('mongoose')

const Product = new Schema({
  category: { type: Types.ObjectId, required: true, ref: 'Category' },
  name: { type: String, required: true, unique: true },
  image: { type: String },
  price: { type: Number },
})

module.exports = model('Product', Product)
