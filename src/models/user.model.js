const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema(
    {
        firstName: {
            type: String,
            allowNull: false
        },
        lastName: {
            type: String,
            allowNull: false
        },
        MobileNumber: {
            type: String,
            allowNull: false
        },
        email: {
            type: String,
            allowNull: false,
            unique: true
        },
        password: {
            type: String,
            allowNull: false
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;