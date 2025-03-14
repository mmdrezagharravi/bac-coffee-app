// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// // Load environment variables
// dotenv.config();

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Create Express app
// const app = express();

// // Middleware
// app.use(express.json());

// // Routes
// app.get("/", (req, res) => {
//   res.send("Welcome to the Cafe App!");
// });

// // Start the server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
