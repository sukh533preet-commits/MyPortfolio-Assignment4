import express from 'express'
import qualificationCtrl from '../controllers/qualification.controller.js'
import auth from '../controllers/auth.controller.js'
const router=express.Router()
router.route('/api/qualifications')
 .get(auth.requireSignin,qualificationCtrl.list)
 .post(auth.requireSignin,auth.isAdmin,qualificationCtrl.create)
 .delete(auth.requireSignin,auth.isAdmin,qualificationCtrl.removeAll)
router.route('/api/qualifications/:qualificationId')
 .get(auth.requireSignin,qualificationCtrl.read)
 .put(auth.requireSignin,auth.isAdmin,qualificationCtrl.update)
 .delete(auth.requireSignin,auth.isAdmin,qualificationCtrl.remove)
export default router
