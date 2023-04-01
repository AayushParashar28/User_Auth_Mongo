const express = require("express");
const Usercontroller = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.post("/user", Usercontroller.createUser);


module.exports = UserRouter ;