const UserModel = require("../models/user.model");
const passwordHelper = require("../utils/password.helper");

exports.createUser = async (req, res) => {

    try {
      const User = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        MobileNumber:req.body.MobileNumber,
        email: req.body.email,
        password: req.body.password
      };

      const salt = passwordHelper.generateSalt();
      User.salt = salt;
      User.password = passwordHelper.hashPassword(User.password, salt);
  
      const result = await UserModel.create(User);
  
      return res.status(201).json({
        sucess: true,
        response: result,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Internal server error",
      });
    }
  }

  exports.getAllUser = async (req, res) => {

    try {
  
      const result = await UserModel.find();
  
      return res.status(201).json({
        sucess: true,
        response: result,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Internal server error",
      });
    }
  }


  exports.signin = async (req, res) => {

    try {
      const user = {
        email: req.body.email,
        password: req.body.password
      }
       const checkUser = await UserModel.findOne({ email: user.email });
      
      if(!checkUser){
        return res.status(200).json({
          "msg":"Invalid Email"
        })
      }
      if(checkUser) {
        const checkPassword = passwordHelper.decodePassword(
          user.password,
          checkUser.password
        );
        if (checkPassword) {
          return res.status(200).json({
            "msg": 'Login Sucessfull '
          })
        }
        else {
          return res.status(200).json({
            "msg": 'Password Invalid'
          })
        }
      }
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Internal server error",
      });
    }
  
  }