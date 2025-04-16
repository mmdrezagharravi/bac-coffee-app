import { Schema, model } from "mongoose";

const coffeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required !!"],
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: [true, "price is require !!!"],
    },
    imageUrl: {
      type: String,
      default:
        "https://www.google.com/imgres?q=coffee&imgurl=https%3A%2F%2Fvinut.com.vn%2Fwp-content%2Fwebp-express%2Fwebp-images%2Fdoc-root%2Fwp-content%2Fuploads%2F2023%2F07%2Fthe-most-popular-coffee-drinks-a-guide-to-the-world-of-coffee-beverages-64b651220ddd2.jpg.webp&imgrefurl=https%3A%2F%2Fvinut.com.vn%2Fproduct-knowledge%2Fthe-most-popular-coffee-drinks-a-guide-to-the-world-of-coffee-beverages%2F&docid=hTTNvyMTiozgFM&tbnid=CWr9RfBWOe48lM&vet=12ahUKEwj6p7zu8deMAxU6_7sIHSTfCIQQM3oECEcQAA..i&w=800&h=600&hcb=2&ved=2ahUKEwj6p7zu8deMAxU6_7sIHSTfCIQQM3oECEcQAA",
    },
    category: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "Category",
      // required: true,
    },
    cofeResturant: {
      type: Schema.Types.ObjectId,
      ref: "cofeResturant", ///????
    },
    available: {
      type: Boolean,
      required: true,
    },
    size: {
      type: String, // exammple : small , medium , large,
      default: "Meium",
    },
    isHot: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model("coffe", coffeSchema);
