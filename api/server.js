import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import LoginRoute from "./routes/auth.js";
import RegisterRoute from "./routes/auth.js";

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/", LoginRoute);
app.use("/", RegisterRoute);

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
