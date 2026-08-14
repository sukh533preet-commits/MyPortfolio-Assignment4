import express from 'express'
import contactCtrl from '../controllers/contact.controller.js'
import auth from '../controllers/auth.controller.js'
const router=express.Router()
router.route('/api/contacts')
 .get(auth.requireSignin,contactCtrl.list)
 .post(auth.requireSignin,contactCtrl.create)
 .delete(auth.requireSignin,auth.isAdmin,contactCtrl.removeAll)
router.route('/api/contacts/:contactId')
 .get(auth.requireSignin,contactCtrl.read)
 .put(auth.requireSignin,auth.isAdmin,contactCtrl.update)
 .delete(auth.requireSignin,auth.isAdmin,contactCtrl.remove)
export default router
