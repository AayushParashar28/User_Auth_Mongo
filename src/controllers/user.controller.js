const UserModel = require("../models/user.model");

exports.createUser = async (req, res) => {

    try {
      const User = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        MobileNumber:req.body.MobileNumber,
        email: req.body.email,
        password: req.body.password
      };
  
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
        email: req.body.email
      }
      const checkUser = await UserModel.find({
        where:
        {
          email: user.email
        }
      })
      if(!checkUser){
        return res.status(200).json({
          "msg":"Invalid Email"
        })
      }
      if(checkUser) {
        console.log(password);
        if (password == req.body.password) {
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