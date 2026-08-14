import mongoose from 'mongoose'

const ServiceSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  imageType: { type: String, enum: ['web', 'app', 'programming'], default: 'web' }
})

export default mongoose.model('Service', ServiceSchema)
