const express = require('express')
const router = express.Router()
const categorygModel = require('../Models/category.model')

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const categoryItem = await categorygModel.find({ catalog: id })
  res.json(categoryItem)
})

module.exports = router
