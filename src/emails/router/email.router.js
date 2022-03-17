import Express from "express";

import {
  createEmail,
  getAllEmail,
  getSingleEmail,
  deleteEmail,
} from "./../controller/email.controller.js";
import { protect } from "./../../middlewares/middlewares.js";

const router = Express.Router();

router.route("/").get(protect, getAllEmail).post(protect, createEmail);
router.route("/:id").get(protect, getSingleEmail).delete(protect, deleteEmail);

export default router;
