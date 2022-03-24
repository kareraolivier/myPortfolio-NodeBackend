import Express from "express";
import {
  createBlog,
  getAllBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} from "./../controller/blog.Controller.js";

import { protect } from "./../../middlewares/middlewares.js";
import commentRouter from "./../../comment/router/comment.router.js";

const router = Express.Router();

router.use("/:blogId/comments", commentRouter);

router.route("/").get(getAllBlog).post(protect, createBlog);
router
  .route("/:id")
  .get(getBlog)
  .delete(protect, deleteBlog)
  .patch(protect, updateBlog);

export default router;
