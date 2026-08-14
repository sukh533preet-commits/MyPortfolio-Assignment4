import mongoose from 'mongoose'
import app from './server/express.js'
import config from './config/config.js'

mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log('MongoDB connected successfully')

    app.listen(config.port, () => {
      console.log(`Backend running at http://localhost:${config.port}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message)
  })
