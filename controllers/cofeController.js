import Coffee from "../models/cofeResturantModel.js";

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

// GET all cofe

const getAllCofeController = async (req, res) => {
  try {
    const cofes = await Coffee.find({});
    if (!cofes) {
      return res.status(404).send({
        success: false,
        message: "no cofe availible",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: cofes.length,
      cofes,
    });
  } catch (error) {
    console.log(object);
    res.status(500).send({
      success: false,
      message: "error in get all cofe api",
      error,
    });
  }
};
// Get cofe by id
const getCofeByIdController = async (req, res) => {
  try {
    const cofeId = req.params.id;
    if (!cofeId) {
      return res.status(404).send({
        success: false,
        message: "please provide cofe id",
      });
    }
    // find cofe
    const cofe = await Coffee.findById(cofeId);
    if (!cofe) {
      return res.status(404).send({
        success: false,
        message: "no cofe found",
      });
    }
    res.status(200).send({
      success: true,
      cofe,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in get cofe by id api",
      error,
    });
  }
};

// Delete cofe
const deleteCofeController = async (req, res) => {
  try {
    const cofeId = req.params.id;
    if (!cofeId) {
      return res.status(404).send({
        success: false,
        message: "please provide cofe ai",
      });
    }
    await Coffee.findByIdAndDelete(cofeId);
    res.status(200).send({
      success: true,
      message: "cofe deleted successfully",
    });
    if (!cofeId) {
      return res.status(404).send({
        success: false,
        message: "no cofe found .",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in delete cofe api",
    });
  }
};

export {
  createCofeController,
  getAllCofeController,
  getCofeByIdController,
  deleteCofeController,
};
