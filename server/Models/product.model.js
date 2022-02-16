const { Schema, model, Types } = require('mongoose')

const Product = new Schema({
  categoryId: { type: Types.ObjectId, required: true, ref: 'Category' },
  categoryName: { type: String, required: true},
  name: { type: String, required: true, unique: true },
  image: { type: String },
  price: { type: Number }
})

module.exports = model('Product', Product)
