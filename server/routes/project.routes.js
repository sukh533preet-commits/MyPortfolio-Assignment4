import express from 'express'
import projectCtrl from '../controllers/project.controller.js'
import auth from '../controllers/auth.controller.js'
const router=express.Router()
router.route('/api/projects')
 .get(auth.requireSignin,projectCtrl.list)
 .post(auth.requireSignin,auth.isAdmin,projectCtrl.create)
 .delete(auth.requireSignin,auth.isAdmin,projectCtrl.removeAll)
router.route('/api/projects/:projectId')
 .get(auth.requireSignin,projectCtrl.read)
 .put(auth.requireSignin,auth.isAdmin,projectCtrl.update)
 .delete(auth.requireSignin,auth.isAdmin,projectCtrl.remove)
export default router
