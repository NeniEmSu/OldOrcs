const mongoose = require('mongoose')
const serviceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
)
const Service = mongoose.model('Service', serviceSchema)
module.exports = Service
