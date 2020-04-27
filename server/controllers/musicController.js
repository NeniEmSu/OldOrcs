const Music = require('../models/songs')
exports.getAllMusics = async (req, res) => {
  try {
    const music = await Music.find()
    res.status(200).json(music)
  } catch (err) {
    res.status(500).json(err)
  }
}
exports.addNewMusic = async (req, res) => {
  try {
    const music = new Music({
      title: req.body.title,
      artist: req.body.artist,
      music: req.files.music,
      image: req.files.image
    })

    const newMusic = await music.save()
    res.status(201).json({ data: newMusic })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

exports.updateMusic = async (req, res) => {
  try {
    const id = req.params.musicId
    const music = new Music({
      _id: id,
      title: req.body.title,
      artist: req.body.artist,
      music: req.files.music,
      image: req.files.image,
      updated: Date.now()
    })

    const updatedMusic = await music.updateOne({
      _id: id,
      title: req.body.title,
      artist: req.body.artist,
      music: req.files.music,
      image: req.files.image,
      updated: Date.now()
    })
    res.status(202).json({ data: updatedMusic })
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

exports.deleteMusic = async (req, res) => {
  try {
    const id = req.params.musicId
    const result = await Music.deleteOne({ _id: id })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}
