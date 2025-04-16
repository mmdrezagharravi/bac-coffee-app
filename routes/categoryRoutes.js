import { Router } from "express";

import authMiddleware from "../middlewares/authMiddleware.js";
// const router = require("./authRoutes");
import {
  createCatController,
  getAllCategoryController,
  updateCategoryController,
  deletCategoryController,
} from "../controllers/categoryController.js";

const router = Router();

//router
// create category
router.post("/create", authMiddleware, createCatController);

// get all category
router.get("/getAll", getAllCategoryController);

// update category
router.put("/update/:id", authMiddleware, updateCategoryController);

// delete category
router.delete("/delete/:id", authMiddleware, deletCategoryController);

export default router;
