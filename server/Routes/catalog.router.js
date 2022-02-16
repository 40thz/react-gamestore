const express = require('express')
const router = express.Router()
const catalogModel = require('../Models/catalog.model')

router.post('/', async (req, res) => {
  try {
    const catalogName = req.body.name
    if (catalogName) {
      await new catalogModel({
        name: catalogName,
        image: 'https://s0.rbk.ru/v6_top_pics/media/img/8/10/755919704492108.jpg'
      }).save()

      res.json({
        message: 'Категория создана'
      })
    } else {
      return res.json({
        message: 'Ошибка'
      })
    }
  } catch (err) {
    console.log(err)
  }
})

router.get('/', async (req, res) => {
  const test = await catalogModel.find()
  res.json(test)
})

module.exports = router
