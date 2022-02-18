const config = require('config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || config.get('PORT')
const MONGO_URI = config.get('MONGO_URL')

const app = express()

const catalog = require('./Routes/catalog.router')
const category = require('./Routes/category.router')
const product = require('./Routes/product.router')
const admin = require('./Routes/admin.router')

app.use(cors())
app.use(express.json({ extended: true }))

app.use('/api/catalog', catalog)
app.use('/api/category', category)
app.use('/api/product', product)
app.use('/admin', admin)

const run = async () => {
  try {
    app.listen(PORT, async () => {
      await mongoose.connect(MONGO_URI)
      console.log(`App has been started on port ${PORT}`)
    })
  } catch (err) {
    console.log('Server error', err.message)
    process.exit(1)
  }
}
run()
