import Express from "express";
import { protect } from "./../../middlewares/middlewares.js";

import {
  createComment,
  deleteComment,
} from "../controller/comment.controller.js";

const router = Express.Router();

router.route("/").post(protect, createComment);
router.route("/:id").delete(protect, deleteComment);

export default router;
