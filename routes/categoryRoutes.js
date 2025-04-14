const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
// const router = require("./authRoutes");
const {
  createCatController,
  getAllCategoryController,
  updateCategoryController,
  deletCategoryController,
} = require("../controllers/categoryController");

const router = express.Router();

//router
// create category
router.post("/create", authMiddleware, createCatController);

// get all category
router.get("/getAll", getAllCategoryController);

// update category
router.put("/update/:id", authMiddleware, updateCategoryController);

// delete category
router.delete("/delete/:id", authMiddleware, deletCategoryController);

module.exports = router;
