import Express from "express";
import {
  createBlog,
  getAllBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} from "./../controller/blog.Controller.js";

const router = Express.Router();

router.route("/").get(getAllBlog).post(createBlog);
router.route("/:id").get(getBlog).delete(deleteBlog).patch(updateBlog);

export default router;
