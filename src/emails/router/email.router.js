import Express from "express";

import {
  createEmail,
  getAllEmail,
  getSingleEmail,
  deleteEmail,
} from "./../controller/email.controller.js";
import { protect } from "./../../middlewares/middlewares.js";

const router = Express.Router();

router.route("/").get(getAllEmail).post(createEmail);
router.route("/:id").get(getSingleEmail).delete(deleteEmail);

export default router;
