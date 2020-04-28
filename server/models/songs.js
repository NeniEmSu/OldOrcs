const mongoose = require('mongoose')
const musicSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  music: {
    type: Object,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updated: {
    type: Date,
    default: Date.now(),
  },
})
const Music = mongoose.model('Music', musicSchema)
module.exports = Music
