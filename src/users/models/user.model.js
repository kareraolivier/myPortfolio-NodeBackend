import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm password"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
  },
});

userSchema.pre("save", function (next) {
  // this.password === this.confirmPassword
  //   ? console.log(true)
  //   : console.log(false);
  this.confirmPassword = undefined;
  next();
});
userSchema.methods.checkPassword = async function (password, userpassword) {
  return await bcrypt.compare(password, userpassword);
};
const User = mongoose.model("User", userSchema);

export default User;
