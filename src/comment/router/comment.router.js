import Express from "express";
import { protect } from "./../../middlewares/middlewares.js";

import {
  createComment,
  deleteComment,
  getAllComments,
} from "../controller/comment.controller.js";

const router = Express.Router();

router.route("/").post(createComment).get(getAllComments);
router.route("/:id").delete(protect, deleteComment);

export default router;
