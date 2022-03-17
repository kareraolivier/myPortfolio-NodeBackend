import Express from "express";
import { protect } from "./../../middlewares/middlewares.js";

import {
  createSubscription,
  getSubscription,
  deleteSubscription,
} from "./../controller/sub.controller.js";

const router = Express.Router();

router
  .route("/")
  .get(protect, getSubscription)
  .post(protect, createSubscription);
router.route("/:id").delete(protect, deleteSubscription);

export default router;
