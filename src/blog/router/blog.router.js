import express from "express";
import {
  createBlog,
  getAllBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} from "./../controller/blog.Controller.js";

const router = express.Router();

router.route("/").get(getAllBlog).post(createBlog);
router.route("/:id").get(getBlog).delete(deleteBlog).patch(updateBlog);

export default router;
