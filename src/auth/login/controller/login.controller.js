import User from "../../../users/models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    // console.log(correctPassword);
    if (!user || !(await user.checkPassword(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE, {
      expiresIn: process.env.JWT_EXPIRESIN,
    });

    res.status(200).json({
      status: "success",
      message: "Logged in successful",
      token,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error: error.stack,
    });
  }
};
