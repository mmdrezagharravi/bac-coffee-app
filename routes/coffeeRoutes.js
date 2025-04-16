import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createCoffeeController,
  getAllCoffeesController,
  getSingleCoffeecontroller,
} from "../controllers/coffeeController.js";

const router = express.Router();

// routes
// create  coffee food

router.post("/create", authMiddleware, createCoffeeController);

// get all coffees
router.get("/getAll", getAllCoffeesController);
// اینجا به این دلیل از میدلور استفاده نشده چون که قراره این رو همه ببیینن هر کی که وارد سایت شد

// get single coffees
router.get("/get/:id", getSingleCoffeecontroller);

export default router;
