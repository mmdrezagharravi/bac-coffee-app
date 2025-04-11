const categoryModel = require("../models/categoryModel");

// Create Category
const createCatController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;

    // validation
    if (!title || !imageUrl) {
      return res.status(500).send({
        success: false,
        message: "please provide category title or image",
      });
    }
    const newcategory = new categoryModel({ title, imageUrl });
    await newcategory.save();
    res.status(200).send({
      success: true,
      message: "category created (:",
      newcategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in create cat api",
      error,
    });
  }
};

module.exports = { createCatController };
