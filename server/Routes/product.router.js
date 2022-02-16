const express = require('express')
const router = express.Router()
const productModel = require('../Models/product.model')

router.post('/', async (req, res) => {
  try {
    //  const catalogName = req.body.name

    await new productModel({
      categoryId: '620b78a1029cdd7f7c4fbac7',
      categoryName: 'ИГРУШКИ',
      name: 'кукла',
      image: 'https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg',
      price: 123
    }).save()

    res.json({
      message: 'Продукт создан'
    })
  } catch (err) {
    console.log(err)
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const productItem = await productModel.find({ categoryId: id })
  res.json(productItem)
})

module.exports = router
