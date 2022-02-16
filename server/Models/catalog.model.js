const {Schema, model} = require('mongoose')


const Catalog = new Schema ({
  name: {type: String, required: true},
  image: {type: String}
  
})

module.exports = model('Catalogs', Catalog)