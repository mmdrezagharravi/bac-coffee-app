const mongoos = require("mongoos");
const { applyTimestamps } = require("./userModel");

const coffeeSchema = new mongoos.Schema({}, { timestamps: true });

module.exports = mongoos.model("coffee", coffeeSchema);
