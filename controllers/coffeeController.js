// create coffee

const coffeModel = require("../models/coffeModel");

const createCoffeeController = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      imageUrl,
      category,
      available,
      size,
      isHot,
      rating,
      cofeResturant,
    } = req.body;

    if (!name || !description || !price || !cofeResturant) {
      return res.status(404).send({
        succeess: false,
        message: "please provide all fieldds !! ",
      });
    }
    const newCoffee = new coffeModel({
      name,
      description,
      price,
      imageUrl,
      category,
      available,
      size,
      isHot,
      rating,
      cofeResturant,
    });
    await newCoffee.save();
    res.status(200).send({
      succeess: true,
      message: "new coffee item created :)",
      newCoffee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      succeess: false,
      message: "error in create coffee api :(",
      error,
    });
  }
};

module.exports = { createCoffeeController };
