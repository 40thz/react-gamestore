const { Schema, model, Types } = require('mongoose')

const Category = new Schema({
  catalog: { type: Types.ObjectId, required: true, ref: 'Catalogs' },
  name: { type: String, required: true, unique: true },
  image: { type: String }
})

module.exports = model('Category', Category)
