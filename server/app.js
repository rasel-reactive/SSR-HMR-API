import path from "path";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import cookieSession from "cookie-session";
import logger from 'morgan'
// const expressSession = require("express-session");
import cors from "cors";

import keys from "../config/keys";

// model........
import "./models/User";

// passport initial............
import "./passport/passportLocal";

// import roures........
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

export default function(app) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(logger('dev'))
  app.use(
    cookieSession({
      name: "hjjjjj",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      keys: [keys.COOKIE_SESSION]
    })
  );
  // ! or
  // app.use(expressSession({
  //   resave: true,
  //   saveUninitialized: true,
  //   secret: "Secret"
  // }))

  // passport session and initialize
  app.use(passport.initialize());

  // Set logged user obj inside req obj
  app.use(passport.session());

  // check our auth status........
  app.use((req, res, next)=>{
    // console.log("req user", req.user);
    // console.log("req session", req.session);
    next()
  })


  // routes registed......
  authRoutes(app);
  userRoutes(app);

  mongoose
    .connect(keys.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("databased conneted...");
    })
    .catch(err => console.log(err));
}
