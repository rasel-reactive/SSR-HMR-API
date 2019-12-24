import passport from "passport";
import mongoose from "mongoose";
import { Strategy as LocalStrategy } from "passport-local"
import bcryptjs from 'bcryptjs'
import _ from 'lodash'

const User = mongoose.model("User")


passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {              
    const user = await User.findOne({email})
    if(!user) {
      return done(null, false, { message: "This Email not registered Yet", path: "email" })    
    }

    const matched = await bcryptjs.compare(password, user.password)
    if(!matched) {
      return done(null, false, { message: "Password Does'nt match", path: "password" })
    }     

    return done(null, done(null, user._id))
  })
);


//*  received user from instance of Local Strategy...... (set inside req.session)
passport.serializeUser((user, done) => {  
  done(null, user._id);
});


//* set inside server req.user = (when user login success)
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user)=>{
    done(null,  _.pick(user, ['username', 'email', '_id']))
  });  
});






