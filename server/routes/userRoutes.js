import passport from "passport";
import Joi from "@hapi/joi";
import bcryptjs from "bcryptjs";
import _ from "lodash";

import mongoose from "mongoose";
const User = mongoose.model("User");

export default app => {
  app.get("/api/users", (req, res, next) => {
    res.send([{ name: "Rasel" }]);
  });
};
