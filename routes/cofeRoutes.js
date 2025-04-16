import { Router } from "express";

import authMiddleware from "../middlewares/authMiddleware.js";
import create from "../models/userModel.js";
import {
  createCofeController,
  getAllCofeController,
  getCofeByIdController,
  deleteCofeController,
} from "../controllers/cofeController.js";

const router = Router();

// create cofe || post
router.post("/create", authMiddleware, createCofeController);

// Get all cofe || GET
router.get("/getAll", getAllCofeController);

// Get cofe by id || GET
router.get("/get/:id", getCofeByIdController);

// Delete cofe resturant || Delete
router.delete("/delete/:id", authMiddleware, deleteCofeController);

export default router;
