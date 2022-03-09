import express from "express";
import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from "./../controller/user.controller.js";

const router = express.Router();

// router.post("/api/v1/users", createUsers);
// router.get("/api/v1/users", getAllUsers);

// router.get("/api/v1/users/:id", getUser);
// router.patch("/api/v1/users/:id", updateUser);
// router.delete("/api/v1/users/:id", deleteUser);

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
