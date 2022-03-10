import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Enter your name"],
  },
  email: {
    type: String,
    required: [true, "Enter your email"],
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message...."],
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Email = mongoose.model("Email", emailSchema);

export default Email;
