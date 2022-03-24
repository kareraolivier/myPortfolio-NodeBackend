import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "your name"],
    },
    comment: {
      type: String,
      required: [true, "enter comment...."],
    },
    blog: {
      type: mongoose.Schema.ObjectId,
      ref: "Blog",
      required: [true, "Provide a blog id"],
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Provide  user id"],
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "author",
    select: "fullName -_id",
  });

  next();
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
