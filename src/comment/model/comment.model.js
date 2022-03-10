import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "your name"],
  },
  comment: {
    type: String,
    required: [true, "enter comment...."],
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});
const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
