import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  avatar: String,
}, {timestamp: true}  )


mongoose.model('User', userSchema)