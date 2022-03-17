import Express from "express";
import {
  createBlog,
  getAllBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} from "./../controller/blog.Controller.js";

import { protect } from "./../../middlewares/middlewares.js";

const router = Express.Router();

router.route("/").get(protect, getAllBlog).post(protect, createBlog);
router
  .route("/:id")
  .get(protect, getBlog)
  .delete(protect, deleteBlog)
  .patch(protect, updateBlog);

export default router;
