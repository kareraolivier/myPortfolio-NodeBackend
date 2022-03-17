import User from "./../users/models/user.model.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";

export const protect = async (req, res, next) => {
  let token;
  try {
    // Get token
    if (req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    // check if token exist

    const verified = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRETE
    );

    // get user from available token

    const existingUser = await User.findById(verified.id);

    if (!existingUser) {
      return res.status(401).json({
        status: "fail",
        message: "User with this token do not exist",
      });
    }

    //  save user on req
    req.user = existingUser;
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "Unauthenticated",
      error: error.stack,
    });
  }
  next();
};

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: "fail",
        message: "You are not permited to perform this",
      });
    }

    next();
  };
};
