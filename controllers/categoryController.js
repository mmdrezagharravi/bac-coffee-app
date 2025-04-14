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
// get all category
const getAllCategoryController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    if (!categories) {
      res.status(404).send({
        success: false,
        message: "not found categories ):",
      });
    }
    res.status(200).send({
      success: true,
      message: "its all categories : ",
      totalCategory: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in get all category api ",
      error,
    });
  }
};

// update category
const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;
    const updateCategory = await categoryModel.findByIdAndUpdate(
      id,
      { title, imageUrl },
      { new: true }
    );
    if (!updateCategory) {
      return res.status(404).send({
        success: false,
        message: "not found category :(",
      });
    }
    res.status(200).send({
      success: true,
      message: "category updated successfully !! :)",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "errror in update category api !!",
      error,
    });
  }
};

// delete category

const deletCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletCategory = await categoryModel.findByIdAndDelete(id);
    if (!deletCategory) {
      return res.status(404).send({
        success: false,
        message: "not found category :(",
      });
    }
    res.status(200).send({
      success: true,
      message: "category delete successfully :)",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in delete category api !!",
    });
  }
};

module.exports = {
  createCatController,
  getAllCategoryController,
  updateCategoryController,
  deletCategoryController,
};
