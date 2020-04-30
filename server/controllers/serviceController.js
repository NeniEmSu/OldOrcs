// const fs = require('fs')
const Service = require('../models/services')
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 })
    res.status(200).json(services)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.getOneService = async (req, res) => {
  try {
    const service = await Service.findOne({ _id: req.params.serviceId })
    res.status(200).json(service)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.addNewService = async (req, res) => {
  try {
    const services = new Service({
      title: req.body.title,
      phone: req.body.phone,
    })

    const newService = await services.save()
    res.status(201).json({ data: newService })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

exports.updateService = async (req, res) => {
  try {
    const id = req.params.serviceId
    const condition = { _id: id }

    const updatedService = await Service.updateOne(condition, req.body)
    res.status(202).json({ data: updatedService })
  } catch (error) {
    res.status(500).json({ error })
  }
}

exports.deleteService = async (req, res) => {
  try {
    const id = req.params.serviceId
    const result = await Service.deleteOne({ _id: id })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}
