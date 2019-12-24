import express from "express";
import router from "./users";
import passport from "passport";
import bcryptjs from "bcryptjs";

const User = require("mongoose").model("User");

const routes = express.Router();

routes.post("/auth/register", async (req, res, next) => {
  const { username, password, email } = req.body;    

  const salt = await bcryptjs.genSalt(10)
  const hashedPassword = await bcryptjs.hash(password, salt)       
  const user = await new User({ username, email, password: hashedPassword }).save()
  res.send(user);
});

//* For Passport Local Auth Hit this url( Client )
router.post("/auth/login", (req, res, next) => {  

  passport.authenticate("local", (err, user, info)=>{    
    let errors = {}
    if(info){
      if(info.path === 'password'){
        errors.statusCode = 401;
        errors.message = info.message
        return res.send(errors)
      }

      if(info.path === 'email'){
        errors.statusCode = 401;
        errors.message = info.message
        return res.send(errors)
      }
      return 
    }

    if(!user){
      let errors = {}
      errors.statusCode = 500;
      errors.message = "Server Error Try Again"
      return res.send(errors)
    };      
    
    req.logIn(user, function(err){
      if(err) return next(err)
      return res.redirect('/currentUser')
    })
  })(req, res, next)

});


// Logout Route..........
router.get('/auth/logout', (req, res, next)=>{
  req.logout();
  res.send('Logout Success......')
})

// currentUser Route.......
router.get('/auth/currentUser', (req, res, next)=>{
  console.log("called.........Current User");
  res.send(req.user)
})



export default routes;

// {successRedirect:"/", failureRedirect:"/auth/login"}

