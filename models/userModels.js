const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Your name is required"],
    },
    email: {
      type: String,
      required: [true, "Your email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Your passowrd is required"],
    },
  },
  {
    timestamps: true,
  }
);
const userModel = new mongoose.model("users", userSchema);
module.exports = userModel;

module.exports;
