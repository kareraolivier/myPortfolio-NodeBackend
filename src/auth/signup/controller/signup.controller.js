import User from "./../../../users/models/user.model.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
  const { password, confirmPassword } = req.body;

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "password not matching",
      });
    }
    const newUser = await User.create({
      fullName: req.body.fullName,
      email: req.body.email,
      role: req.body.role,
      password: await bcrypt.hash(password, 10),
      confirmPassword: req.body.confirmPassword,
    });

    res.status(201).json({
      status: "success",
      message: "hello",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
