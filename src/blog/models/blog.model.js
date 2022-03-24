import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Add title"],
    },
    blog: {
      type: String,
      required: [true, "Add blogs"],
    },

    createAt: {
      type: Date,
      default: Date.now(),
    },
    updateAt: {
      type: Date,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

blogSchema.virtual("comments", {
  ref: "Comment",
  foreignField: "blog",
  localField: "_id",
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
