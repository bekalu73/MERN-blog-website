import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const ProfileController = (req, res) => {
  const { token } = req.cookies;

  jwt.verify(token, process.env.JWT_KEY, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
};
export default ProfileController;
