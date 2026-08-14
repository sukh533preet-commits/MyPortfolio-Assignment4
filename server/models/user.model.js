import mongoose from 'mongoose'
import crypto from 'crypto'
const UserSchema = new mongoose.Schema({
  name:{type:String,trim:true,required:true},
  email:{type:String,trim:true,lowercase:true,unique:true,required:true,match:/.+\@.+\..+/},
  role:{type:String,enum:['user','admin'],default:'user'},
  created:{type:Date,default:Date.now}, updated:{type:Date,default:Date.now},
  hashed_password:{type:String,required:true}, salt:String
})
UserSchema.virtual('password').set(function(password){this._password=password;this.salt=crypto.randomBytes(16).toString('hex');this.hashed_password=this.encryptPassword(password)}).get(function(){return this._password})
UserSchema.path('hashed_password').validate(function(){if(this._password&&this._password.length<6)this.invalidate('password','Password must be at least 6 characters');if(this.isNew&&!this._password)this.invalidate('password','Password is required')})
UserSchema.methods={authenticate(plain){return this.encryptPassword(plain)===this.hashed_password},encryptPassword(password){if(!password)return '';return crypto.createHmac('sha256',this.salt).update(password).digest('hex')}}
UserSchema.set('toJSON',{transform(_doc,ret){delete ret.hashed_password;delete ret.salt;return ret}})
export default mongoose.model('User',UserSchema)
