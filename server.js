// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import morgan from "morgan";
import colors from "colors";
import cors from "cors";
import connectDb from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cofeRoutes from "./routes/cofeRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import coffeeRoutes from "./routes/coffeeRoutes.js";

// DB connection
connectDb();

// rest object
const app = express();

// middleware
app.use(json());
app.use(morgan("dev"));
app.use(cors());

// route
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/cofe", cofeRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/coffeeee", coffeeRoutes);

app.get("/test", (req, res) => {
  return res.status(200).send("<h1> Welcome to Coffee Server App </h1>");
});

const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`server is running with port: ${PORT}`.bgMagenta);

  console.log("MongoDB URL:", process.env.MONGO_URL.bgGreen); /// test
});
