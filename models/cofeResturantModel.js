const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "cofe title is required"],
    },
    imageURL: {
      type: String,
    },
    cofe: { type: Array },
    time: {
      type: String,
    },
    pickup: {
      type: Boolean,
      default: true,
    },
    delivery: {
      type: Boolean,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    logoURL: {
      type: String,
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: Number,
    },
    coords: {
      id: { type: String },
      latitude: { type: Number },
      longitude: { type: Number },
      longitudeDelta: { type: Number },
      address: { type: String },
      title: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("coffee", coffeeSchema);
