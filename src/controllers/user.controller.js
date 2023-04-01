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