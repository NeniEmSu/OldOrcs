const mongoose = require('mongoose')
const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    subCategory: {
      type: String,
      required: false,
    },
    thumbnail: {
      type: Object,
      required: true,
    },
    images: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
)
const Job = mongoose.model('Job', jobSchema)
module.exports = Job
