import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"],
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

const User = mongoose.model("User", userSchema);

export default User;
