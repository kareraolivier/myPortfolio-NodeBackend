import Express from "express";

import {
  createSubscription,
  getSubscription,
  deleteSubscription,
} from "./../controller/sub.controller.js";

const router = Express.Router();

router.route("/").get(getSubscription).post(createSubscription);
router.route("/:id").delete(deleteSubscription);

export default router;
