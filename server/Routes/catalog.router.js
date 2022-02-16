const express = require('express')
const router = express.Router()
const catalogModel = require('../Models/catalog.model')

router.get('/', async (req, res) => {
  const catalogItem = await catalogModel.find()
  res.json(catalogItem)
})

module.exports = router
