const express = require('express')
const router = express.Router()
const musicController = require('../controllers/musicController')
const upload = require('../middleware/mix-multer-config')

router.get('/', musicController.getAllMusics)

router.post(
  '/',
  upload.upload.fields([
    {
      name: 'music',
      maxCount: 1
    },
    {
      name: 'image',
      maxCount: 1
    }
  ]),
  musicController.addNewMusic
)

router.put(
  '/:musicId',
  // upload.upload.single('music'),
  musicController.updateMusic
)

router.delete('/:musicId', musicController.deleteMusic)

module.exports = router
