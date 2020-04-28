const Job = require('../models/jobs')
exports.getAllJobs = async (req, res) => {
  try {
    const work = await Job.find()
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
    const work = new Job({
      _id: id,
      title: req.body.title,
      description: req.body.description,
      thumbnail: req.files.thumbnail,
      images: req.files.images,
      updated: Date.now(),
    })

    const updatedJob = await work.updateOne({
      _id: id,
      title: req.body.title,
      description: req.body.description,
      thumbnail: req.files.thumbnail,
      images: req.files.images,
      updated: Date.now(),
    })
    res.status(202).json({ data: updatedJob })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

exports.deleteJob = async (req, res) => {
  try {
    const id = req.params.workId
    const result = await Job.deleteOne({ _id: id })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}
