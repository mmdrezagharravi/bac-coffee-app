const cofeResturantModel = require("../models/cofeResturantModel");

const createCofeController = async (req, res) => {
  try {
    const {
      title,
      imageURL,
      cofe,
      pickup,
      delivery,
      isOpen,
      logoURL,
      rating,
      ratingCount,
      coords,
    } = req.body;

    // validation
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "please provide title and address",
      });
    }
    const newcofee = new cofeResturantModel({
      title,
      imageURL,
      cofe,
      pickup,
      delivery,
      isOpen,
      logoURL,
      rating,
      ratingCount,
      coords,
    });
    await newcofee.save();
    res.status(201).send({
      success: true,
      message: "new cofe created successfuly",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "errror in create cofe api",
      error,
    });
  }
};

module.exports = { createCofeController };
