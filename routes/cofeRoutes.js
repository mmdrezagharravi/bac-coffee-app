const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const { create } = require("../models/userModel");
const {
  createCofeController,
  getAllCofeController,
  getCofeByIdController,
  deleteCofeController,
} = require("../controllers/cofeController");

const router = express.Router();

// create cofe || post
router.post("/create", authMiddleware, createCofeController);

// Get all cofe || GET
router.get("/getAll", getAllCofeController);

// Get cofe by id || GET
router.get("/get/:id", getCofeByIdController);

// Delete cofe resturant || Delete
router.delete("/delete/:id", authMiddleware, deleteCofeController);

module.exports = router;
