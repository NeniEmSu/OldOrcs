const express = require('express')
const router = express.Router()
const workController = require('../controllers/workController')
const upload = require('../middleware/image-multer-config')

router.get('/', workController.getAllJobs)

router.get('/:workId', workController.getOneJob)

router.post(
  '/',
  upload.upload.fields([
    {
      name: 'thumbnail',
      maxCount: 1
    },
    {
      name: 'images',
      maxCount: 10
    }
  ]),
  workController.addNewJob
)

router.put(
  '/:workId',
  upload.upload.fields([
    {
      name: 'thumbnail',
      maxCount: 1
    },
    {
      name: 'images',
      maxCount: 10
    }
  ]),
  workController.updateJob
)

router.delete('/:workId', workController.deleteJob)

module.exports = router
