import mongoose from 'mongoose'

const AboutSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true }
})

export default mongoose.model('About', AboutSchema)
