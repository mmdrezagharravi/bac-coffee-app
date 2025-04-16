import { Schema, model } from "mongoose";

// schema
const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "category title is required ."],
    },
    imageUrl: {
      type: String,
      default:
        "https://www.google.com/imgres?q=logo%20coffee&imgurl=https%3A%2F%2Fwww.citypng.com%2Fpublic%2Fuploads%2Fpreview%2Fbrown-coffee-cup-logo-design-hd-png-701751694776791z8t9jck4mz.png&imgrefurl=https%3A%2F%2Fwww.citypng.com%2Fphoto%2F22281%2Fbrown-coffee-cup-logo-design-hd-png&docid=t5kvj1kIwMkA1M&tbnid=WlGnH34i51llNM&vet=12ahUKEwjs8bH7gciMAxV2hf0HHf3dNXEQM3oECDAQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwjs8bH7gciMAxV2hf0HHf3dNXEQM3oECDAQAA",
    },
  },
  {
    timestamps: true,
  }
);

// export
export default model("Category", categorySchema);
