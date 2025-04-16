// const mongoose = require("mongoose");
// const colors = require("colors");

// // function mongodb dfatabase connection

// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL);

//     console.log(`connected to database : ${mongoose.connection.host}`.bgCyan);
//   } catch (error) {
//     console.log("DB Error", error, colors.bgRed);
//     process.exit(1);
//   }
// };

// module.exports = connectDb;

// import { connect, connection } from "mongoose";
import mongoose from "mongoose";
const { connect, connection } = mongoose;

const connectDb = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MongoDB URL is missing in .env file");
    }

    await connect(process.env.MONGO_URL);
    console.log(`✅ Connected to database: ${connection.host}`);
  } catch (error) {
    console.log("❌ DB Error:", error.message);
    process.exit(1); // سرور رو متوقف کن
  }
};

export default connectDb;
