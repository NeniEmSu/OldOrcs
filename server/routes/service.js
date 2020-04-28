const express = require('express')
const router = express.Router()
const serviceController = require('../controllers/serviceController')
const upload = require('../middleware/image-multer-config')

router.get('/', serviceController.getAllServices)

router.get('/:serviceId', serviceController.getOneService)

router.post(
  '/',
  upload.upload.fields([
    {
      name: 'thumbnail',
      maxCount: 1,
    },
    {
      name: 'images',
      maxCount: 10,
    },
  ]),
  serviceController.addNewService
)

router.put(
  '/:serviceId',
  upload.upload.fields([
    {
      name: 'thumbnail',
      maxCount: 1,
    },
    {
      name: 'images',
      maxCount: 10,
    },
  ]),
  serviceController.updateService
)

router.delete('/:serviceId', serviceController.deleteService)

module.exports = router
