import express from "express";
import {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from "./../controller/user.controller.js";

import { createUser } from "./../../auth/signup/controller/signup.controller.js";
import { login } from "./../../auth/login/controller/login.controller.js";
import { protect, restrictTo } from "./../../middlewares/middlewares.js";

const router = express.Router();

// router.post("/api/v1/users", createUsers);
// router.get("/api/v1/users", getAllUsers);

// router.get("/api/v1/users/:id", getUser);
// router.patch("/api/v1/users/:id", updateUser);
// router.delete("/api/v1/users/:id", deleteUser);

router.post("/login", login);

router
  .route("/")
  .get(protect, restrictTo("admin"), getAllUsers)
  .post(createUser);
router
  .route("/:id")
  .get(protect, getUser)
  .patch(protect, restrictTo("admin"), updateUser)
  .delete(protect, restrictTo("admin"), deleteUser);

export default router;
