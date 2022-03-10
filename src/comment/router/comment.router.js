import Express from "express";

import {
  createComment,
  deleteComment,
} from "../controller/comment.controller.js";

const router = Express.Router();

router.route("/").post(createComment);
router.route("/").delete(deleteComment);

export default router;
