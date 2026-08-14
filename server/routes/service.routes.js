import express from 'express'
import serviceCtrl from '../controllers/service.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()
router.route('/api/services')
  .get(authCtrl.requireSignin, serviceCtrl.list)
  .post(authCtrl.requireSignin, authCtrl.isAdmin, serviceCtrl.create)
router.route('/api/services/:serviceId')
  .put(authCtrl.requireSignin, authCtrl.isAdmin, serviceCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.isAdmin, serviceCtrl.remove)

export default router
