import express from 'express'
import userCtrl from '../controllers/user.controller.js'
import auth from '../controllers/auth.controller.js'
const router=express.Router()
router.route('/api/users').post(userCtrl.create).get(auth.requireSignin,auth.isAdmin,userCtrl.list)
router.route('/api/users/:userId').get(auth.requireSignin,auth.hasAuthorization,userCtrl.read).put(auth.requireSignin,auth.hasAuthorization,userCtrl.update).delete(auth.requireSignin,auth.hasAuthorization,userCtrl.remove)
router.param('userId',userCtrl.userByID)
export default router
