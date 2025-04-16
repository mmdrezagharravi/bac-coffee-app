// create coffee

import Coffee from "../models/coffeModel.js";

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
// get all coffees
const getAllCoffeesController = async (req, res) => {
  try {
    const coffees = [];
    if (req.body.category) {
      const list = await Coffee.find({ category: req.body.category });
      coffees.push(list);
    } else {
      const list = await Coffee.find({ category: req.body.category });
      coffees.push(list);
    }
    if (!coffees) {
      return res.status(404).send({
        success: false,
        message: "not found coffees :(",
      });
    }
    res.status(200).send({
      success: true,
      totalCoffees: coffees.length,
      coffees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in getAll coffees api !!!",
      error,
    });
  }
};

// get single coffee

const getSingleCoffeecontroller = async (req, res) => {
  try {
    const coffeeId = req.params.id;
    if (!coffeeId) {
      return res.status(404).send({
        succeess: false,
        message: "please provide coffee Id",
      });
    }

    const coffee = await Coffee.findById(coffeeId);
    if (!coffee) {
      return res.status(404).send({
        success: false,
        message: "not found coffe :(",
      });
    }
    res.status(200).send({
      success: true,
      coffee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in get Single coffee api !!!",
      error,
    });
  }
};

export {
  createCoffeeController,
  getAllCoffeesController,
  getSingleCoffeecontroller,
};
