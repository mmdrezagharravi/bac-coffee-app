const express = require("express");
const {
  getUserController,
  updateUserController,
  updatePasswordController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// get user || GET

router.get("/getUser", authMiddleware, getUserController);

// update profile

router.put("/updateUser", authMiddleware, updateUserController);

// update password

router.post("/updatePassword", authMiddleware, updatePasswordController);

module.exports = router;
