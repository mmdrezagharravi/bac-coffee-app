const { default: mongoose } = require("mongoose");
const mongoos = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "user name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    usertype: {
      type: String,
      required: [true, "user type is required"],
      default: "clinet",
      enume: ["clinet", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s",
    },
  },
  // createdAt \\ updatedAt
  { timestamps: true }
);

// exports
module.exports = mongoos.model("user :", userSchema);
