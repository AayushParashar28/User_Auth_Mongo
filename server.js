require('dotenv').config();
const express = require("express");
const connect = require("./src/config/database.config");
const UserRouter = require("./src/routes/user.route");



const app = express();

const setupandstartserver = async function () {
   
    app.use(express.json());
    app.use(UserRouter);


    await connect();
    console.log("Database started");



    const PORT = process.env.PORT;
    app.listen(PORT, (req, res) => {
        console.log(`server started at 3000`);
    })

}

setupandstartserver(); 