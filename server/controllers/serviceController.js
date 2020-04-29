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
    const service = new Service({
      _id: id,
      title: req.body.title,
      name: req.body.name,
      phone: req.body.phone,
      status: req.body.status,
      description: req.body.description,
      updated: Date.now(),
    })

    const updatedService = await service.updateOne({
      _id: id,
      title: req.body.title,
      name: req.body.name,
      phone: req.body.phone,
      status: req.body.status,
      description: req.body.description,
      updated: Date.now(),
    })
    res.status(202).json({ data: updatedService })
  } catch (err) {
    res.status(500).json({ error: err })
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
