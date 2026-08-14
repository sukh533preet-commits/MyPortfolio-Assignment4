import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import contactRoutes from './routes/contact.routes.js'
import projectRoutes from './routes/project.routes.js'
import qualificationRoutes from './routes/qualification.routes.js'
import aboutRoutes from './routes/about.routes.js'
import serviceRoutes from './routes/service.routes.js'

const app = express()

const allowedOrigins = [
  'http://localhost:5173',
  process.env.CLIENT_URL
].filter(Boolean)

app.use(cors({
  origin(origin, callback) {
    // Allow non-browser tools (Postman, health checks) and configured frontends.
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true)
    return callback(new Error('Origin not allowed by CORS'))
  },
  credentials: true
}))
app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (_req, res) => res.json({ message: 'Welcome to Sukhpreet Portfolio API' }))
app.use(userRoutes)
app.use(authRoutes)
app.use(contactRoutes)
app.use(projectRoutes)
app.use(qualificationRoutes)
app.use(aboutRoutes)
app.use(serviceRoutes)
app.use((err, _req, res, _next) => {
  if (err.name === 'UnauthorizedError') return res.status(401).json({ error: 'Please sign in' })
  console.error(err)
  res.status(err.status || 500).json({ error: err.message || 'Server error' })
})
export default app
