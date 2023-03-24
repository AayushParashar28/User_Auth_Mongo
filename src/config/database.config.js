const mongoose = require("mongoose");
// const DBURL = process.env.DB;

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://dipu71_user1:5d1ocrukARzN74Kh@cluster0.5ocpt.mongodb.net/?retryWrites=true&w=majority");
  } catch (error) {
    throw error;
  }
};

module.exports = connect;