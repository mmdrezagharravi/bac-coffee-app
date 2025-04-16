import { Router } from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";

const router = Router();

//router
// register || post
router.post("/register", registerController);

// login || post
router.post("/login", loginController);

export default router;
