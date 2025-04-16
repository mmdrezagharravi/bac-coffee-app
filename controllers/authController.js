import User from "../models/userModel.js";
import { genSaltSync, hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

//register
const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone, address, answer } = req.body;
    //validation
    if (!userName || !email || !password || !phone || !address || !answer) {
      return res.status(500).send({
        success: false,
        message: "Please Provie all fields",
      });
    }

    // check user
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(500).send({
        success: false,
        message: "email alredy register please login",
      });
    }
    // hashing password
    var salt = genSaltSync(10);
    const hashedPassword = await hash(password, salt);

    //create new user
    const user = await User.create({
      userName,
      email,
      password: hashedPassword, // hashing pass
      address,
      phone,
      answer,
    });
    res.status(201).send({
      success: true,
      message: "successfully registered",
    });

    //Error
  } catch (error) {
    console.log(error);
    req.Status(500).send({
      success: false,
      message: "error in register api",
    });
  }
};

//login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // valid fatuion
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "please provide email or password",
      });
    }
    // check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found . ",
      });
    }

    /// check user password | compare passsword

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "invalid credentials",
      });
    }
    // // token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    user.password = undefined; // penhan kardna password
    res.status(200).send({
      success: true,
      message: "login successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in login api",
      error,
    });
  }
};

export { registerController, loginController };
