//import 'dotenv/config'

export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'development-secret-change-me',
  mongoUri: process.env.MONGO_URI || 'mongodb+srv://sukh533preet_db_user:AmthjyXVih9LEleX@cluster0.gg71gcb.mongodb.net/Portfolio?appName=Cluster0'
}
