import express from "express";
import mongoose from "mongoose";
import User from "./models/Users.js";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });

app.post("/register", async (req, res) => {
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
});

app.listen(5000, (err) => {
  if (err) return console.log("error", err);
  console.log("listening on port 5000");
});
