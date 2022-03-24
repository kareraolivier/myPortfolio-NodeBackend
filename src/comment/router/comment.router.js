import Express from "express";
import { protect } from "./../../middlewares/middlewares.js";

import {
  createComment,
  deleteComment,
  getAllComments,
} from "../controller/comment.controller.js";

const router = Express.Router({ mergeParams: true });

router.route("/").post(protect, createComment).get(getAllComments);
router.route("/:id").delete(protect, deleteComment);

export default router;
