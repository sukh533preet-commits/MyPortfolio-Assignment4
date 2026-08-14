import express from 'express'
import auth from '../controllers/auth.controller.js'
const router=express.Router()
router.post('/auth/signin',auth.signin)
router.get('/auth/signout',auth.signout)
export default router
