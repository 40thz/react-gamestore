const express = require('express')
const router = express.Router()
const productModel = require('../Models/product.model')

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const productItem = await productModel.find({ categoryId: id })
  res.json(productItem)
})

module.exports = router
