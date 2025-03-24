const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const { create } = require("../models/userModel");
const { createCofeController } = require("../controllers/cofeController");

const router = express.Router();

// create cofe || post
router.post("/create", authMiddleware, createCofeController);

module.exports = router;
