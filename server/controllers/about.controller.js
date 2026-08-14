import About from '../models/about.model.js'

const read = async (_req, res) => {
  try {
    const about = await About.findOne()
    if (!about) return res.status(404).json({ error: 'About information not found' })
    res.json(about)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const update = async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      {},
      { name: req.body.name, description: req.body.description },
      { new: true, runValidators: true, upsert: true }
    )
    res.json(about)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export default { read, update }
