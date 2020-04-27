const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'music') {
      // if uploading music
      cb(null, 'server/audio')
    } else {
      // else uploading image
      cb(null, 'server/images')
    }
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
})
const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'music') {
    // if uploading music
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
  } else {
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
      ? cb(null, true)
      : cb(null, false) // else fails
  }
}
exports.upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFilter
})
