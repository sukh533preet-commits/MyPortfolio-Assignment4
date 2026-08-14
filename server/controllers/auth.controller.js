import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import { expressjwt } from 'express-jwt'
import config from '../../config/config.js'
const signin=async(req,res)=>{try{const user=await User.findOne({email:req.body.email?.toLowerCase()});if(!user||!user.authenticate(req.body.password))return res.status(401).json({error:'Email or password is incorrect'});const token=jwt.sign({_id:user._id,role:user.role},config.jwtSecret,{expiresIn:'2h'});res.cookie('t',token,{httpOnly:true,sameSite:'lax',maxAge:7200000});res.json({token,user:{_id:user._id,name:user.name,email:user.email,role:user.role}})}catch(e){res.status(500).json({error:'Could not sign in'})}}
const signout=(_req,res)=>{res.clearCookie('t');res.json({message:'Signed out successfully'})}
const requireSignin=expressjwt({secret:config.jwtSecret,algorithms:['HS256'],requestProperty:'auth',getToken:req=>req.headers.authorization?.startsWith('Bearer ')?req.headers.authorization.split(' ')[1]:req.cookies.t})
const isAdmin=(req,res,next)=>req.auth?.role==='admin'?next():res.status(403).json({error:'Admin access required'})
const hasAuthorization=(req,res,next)=>String(req.profile?._id)===String(req.auth?._id)||req.auth?.role==='admin'?next():res.status(403).json({error:'User is not authorized'})
export default {signin,signout,requireSignin,isAdmin,hasAuthorization}
