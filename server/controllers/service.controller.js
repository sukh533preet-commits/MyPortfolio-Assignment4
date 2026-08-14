import Service from '../models/service.model.js'

const create = async (req, res) => {
  try { res.status(201).json(await new Service(req.body).save()) }
  catch (err) { res.status(400).json({ error: err.message }) }
}
const list = async (_req, res) => {
  try { res.json(await Service.find()) }
  catch (err) { res.status(400).json({ error: err.message }) }
}
const update = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.serviceId, req.body, { new: true, runValidators: true })
    if (!service) return res.status(404).json({ error: 'Service not found' })
    res.json(service)
  } catch (err) { res.status(400).json({ error: err.message }) }
}
const remove = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.serviceId)
    if (!service) return res.status(404).json({ error: 'Service not found' })
    res.json({ message: 'Service deleted successfully' })
  } catch (err) { res.status(400).json({ error: err.message }) }
}
export default { create, list, update, remove }
