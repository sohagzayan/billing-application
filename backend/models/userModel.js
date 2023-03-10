const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxLength: [30, "Name cannot exceed 28 characterr"],
    minLength: [3, "Name should have more  then 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your Email"],
    unique: true,
    validate: [validator.isEmail, "Please enter your valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "Password cannot have more then 8 character"],
  },
  billing: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Billing",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.getResetPassword = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpires = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
