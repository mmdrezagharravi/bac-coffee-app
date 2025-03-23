const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// create cofe || post
router.post("/create", authMiddleware);

module.exports = router;
