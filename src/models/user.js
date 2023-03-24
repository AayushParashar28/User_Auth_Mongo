const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
    {
        firstName: {
            type: STRING,
            allowNull: false
        },
        lastName: {
            type: STRING,
            allowNull: false
        },
        MobileNumber: {
            type: STRING,
            allowNull: false
        },
        email: {
            type: STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: STRING,
            allowNull: false
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;