import express from 'express'
import aboutCtrl from '../controllers/about.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()
router.route('/api/about')
  .get(authCtrl.requireSignin, aboutCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.isAdmin, aboutCtrl.update)

export default router
