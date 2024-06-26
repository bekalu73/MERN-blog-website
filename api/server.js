import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import LoginRoute from "./routes/auth.js";
import RegisterRoute from "./routes/auth.js";
import ProfileController from "./routes/auth.js";
import LogoutController from "./routes/auth.js";

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

app.use("/", LoginRoute);
app.use("/", RegisterRoute);
app.use("/", ProfileController);
app.use("/", LogoutController);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });

app.listen(5000, (err) => {
  if (err) return console.log("error", err);
  console.log("listening on port 5000");
});
