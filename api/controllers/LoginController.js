import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/Users.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const LoginController = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json("user doesn't exist");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json("Incorrect username or password");

    jwt.sign(
      { username, id: user._id },
      process.env.JWT_KEY,
      {},
      (err, token) => {
        if (err) return res.status(400).json("Error", err);
        return res.cookie("token", token).status(200).json(token);
      }
    );
  } catch (err) {
    res.status(400).json(`${err.message || err}`);
  }
};
export default LoginController;
