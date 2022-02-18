const { Schema, model } = require('mongoose')

const AdminSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['admin', 'restricted'],
      required: true
    }
  },
  { collection: 'admin' }
)

const Admin = model('Admin', AdminSchema)

module.exports = { AdminSchema, Admin }
