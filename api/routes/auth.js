import express from "express";
import RegisterController from "../controllers/RegisterController.js";
import LoginController from "../controllers/LoginController.js";
const router = express.Router();

router.post("/register", RegisterController);
router.post("/login", LoginController);

export default router;
