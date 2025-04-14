const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const { createCoffeeController } = require("../controllers/coffeeController");

const router = express.Router();

// routes
router.post("/create", authMiddleware, createCoffeeController);

module.exports = router;
