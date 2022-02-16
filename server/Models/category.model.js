const { Schema, model } = require('mongoose')

const Category = new Schema({
  catalogId: { type: String, required: true },
  catalogName: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  image: { type: String }
})

module.exports = model('Category', Category)
