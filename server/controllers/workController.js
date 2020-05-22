const fs = require('fs')
const Job = require('../models/jobs')
exports.getAllJobs = async (req, res) => {
  try {
    const work = await Job.find().sort({ createdAt: -1 })
    res.status(200).json(work)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.getOneJob = async (req, res) => {
  try {
    const work = await Job.findOne({ _id: req.params.workId })
    res.status(200).json(work)
  } catch (err) {
    res.status(500).json(err)
  }
}
exports.addNewJob = async (req, res) => {
  try {
    const work = new Job({
      title: req.body.title,
      description: req.body.description,
      thumbnail: req.files.thumbnail,
      images: req.files.images,
      category: req.body.category,
      subCategory: req.body.subCategory,
    })
    const newJob = await work.save()
    res.status(201).json({ data: newJob })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

exports.updateJob = async (req, res) => {
  try {
    const id = req.params.workId
    const condition = { _id: id }

    const updatedJob = await Job.updateOne(condition, req.body)
    res.status(202).json({ data: updatedJob })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

// exports.deleteJob = async (req, res) => {
//   try {
//     const id = req.params.workId
//     const result = await Job.deleteOne({ _id: id })
//     res.status(200).json(result)
//   } catch (err) {
//     res.status(500).json(err)
//   }
// }

// exports.deleteJob = (req, res, next) => {
//   const id = req.params.workId
//   Job.findOne({
//     _id: id,
//   }).then((work) => {
//     const filePath = work.thumbnail.path
//     fs.unlink(filePath, () => {
//       const result = Job.deleteOne({
//         _id: id,
//       })
//         .then(() => {
//           res.status(200).json({
//             message: 'Deleted',
//             result,
//           })
//         })
//         .catch((error) => {
//           res.status(400).json({
//             error,
//           })
//         })
//     })
//   })
// }

exports.deleteJob = async (req, res, next) => {
  try {
    const id = req.params.workId
    const work = await Job.findOne({ _id: id })
    const thumbnailPath = work.thumbnail[0].path

    const imagesPaths = work.images.map((image) => {
      return image.path
    })

    const concactinatedFilePathsToDelete = imagesPaths.concat(thumbnailPath)
    const filePathsToDelete = concactinatedFilePathsToDelete

    filePathsToDelete.map((filePath) => {
      return fs.unlinkSync(filePath)
    })

    const result = await Job.deleteOne({ _id: id })
    res.status(200).json({
      message: 'Deleted',
      result,
    })
  } catch (err) {
    res.status(500).json(err)
  }
}
