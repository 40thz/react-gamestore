const { Schema, model, Types } = require('mongoose')

const Category = new Schema({
  catalogId: { type: Types.ObjectId, required: true, ref: 'Catalogs' },
  catalogName: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  image: { type: String }
})

module.exports = model('Category', Category)
