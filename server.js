require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const connectDb = require("./config/db");

// DB connection
connectDb();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// route
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/cofe", require("./routes/cofeRoutes"));
app.use("/api/v1/category", require("./routes/categoryRoutes"));

app.get("/test", (req, res) => {
  return res.status(200).send("<h1> Welcome to Coffee Server App </h1>");
});

const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`server is running with port: ${PORT}`.bgMagenta);

  console.log("MongoDB URL:", process.env.MONGO_URL.bgGreen); /// test
});
