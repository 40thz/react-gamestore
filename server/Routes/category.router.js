const express = require('express')
const router = express.Router()
const categorygModel = require('../Models/category.model')

router.post('/', async (req, res) => {
  try {
    //  const catalogName = req.body.name

    await new categorygModel({
      catalogId: '620b2e7de70f9f831a4262a8',
      name: 'ИГРУШКИ',
      image: 'https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg'
    }).save()

    res.json({
      message: 'Категория создана'
    })
  } catch (err) {
    console.log(err)
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const categoryItem = await categorygModel.find({ catalogId: id })
  res.json(categoryItem)
})

module.exports = router
