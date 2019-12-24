import express from 'express'
import mongoose  from 'mongoose'
const router = express.Router()

const User = mongoose.model("User")

router.get('/api/users', (req, res)=>{ 
  User.find().then(user=>{
    res.send(user)
  })
  
})


export default router