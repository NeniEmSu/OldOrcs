const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'server/audio')
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
})
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'audio/mpeg' ||
    file.mimetype === 'audio/wave' ||
    file.mimetype === 'audio/wav' ||
    file.mimetype === 'audio/mp3'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
exports.upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFilter
})
