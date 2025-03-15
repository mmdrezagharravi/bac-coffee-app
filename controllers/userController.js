// Get User info

const userModel = require("../models/userModel");

const getUserController = async (req, res) => {
  try {
    // find user
    const user = await userModel.findById({ _id: req.body.id });

    // validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    // to hide password
    user.password = undefined;

    // response
    res.status(200).send({
      success: true,
      message: "user get successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      Success: false,
      message: "error in get user api",
      error,
    });
  }
};

// UPDATE USER
const updateUserController = async (req, res) => {
  try {
    // fine user
    const user = await userModel.findById({ _id: req.body.id });

    // validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }

    // update
    const { userName, address, phone } = req.body;
    if (userName) user.userName = userName;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    // save user
    await user.save();
    res.status(200).send({
      success: true,
      message: "user updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in update user api",
      error,
    });
  }
};

module.exports = { getUserController, updateUserController };
