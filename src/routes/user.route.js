const express = require("express");
const Usercontroller = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.post("/user", Usercontroller.createUser);

UserRouter.get("/alluser",Usercontroller.getAllUser);

UserRouter.post("/login",Usercontroller.signin);

module.exports = UserRouter ;