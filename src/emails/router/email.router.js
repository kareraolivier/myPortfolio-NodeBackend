import Express from "express";
import { protect } from "../../middlewares/middlewares.js";

import {
  createEmail,
  getAllEmail,
  getSingleEmail,
  deleteEmail,
} from "./../controller/email.controller.js";

const router = Express.Router();

router.route("/").get(getAllEmail).post(createEmail);
router.route("/:id").get(getSingleEmail).delete(protect, deleteEmail);

export default router;
