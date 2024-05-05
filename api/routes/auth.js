import express from "express";
import RegisterController from "../controllers/RegisterController.js";
import LoginController from "../controllers/LoginController.js";
import ProfileController from "../controllers/ProfileController.js";
const router = express.Router();

router.post("/register", RegisterController);
router.post("/login", LoginController);

router.get("/profile", ProfileController);

export default router;
