import { Router } from "express";
import newLocal from "../controllers/userController.js";
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
} = newLocal;
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// get user || GET

router.get("/getUser", authMiddleware, getUserController);

// update profile

router.put("/updateUser", authMiddleware, updateUserController);

// update password

router.post("/updatePassword", authMiddleware, updatePasswordController);

// reset password
router.post("/resetPassword", authMiddleware, resetPasswordController);

// delete user
router.delete("/deleteUser/:id", authMiddleware, deleteProfileController);

export default router;
