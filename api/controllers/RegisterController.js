import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/Users.js";

const RegisterController = async (req, res) => {
  const { username } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    const saveUser = new User({
      username,
      password,
    });
    const savedUser = await saveUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    console.log("error", err);
  }
};

export default RegisterController;
