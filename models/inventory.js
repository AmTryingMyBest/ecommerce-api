const mongoose = require("mongoose");
const { sellerSchema } = require("./seller");

const inventorySchema = new mongoose.Schema({
  itemName: { type: String, required: true, minlength: 3, maxlength: 30 },
  itemDescription: { type: String, required: true, minlength: 10 },
  // look into how to upload and handle images on mongodb
  // image:,
  quantity: { type: Number, required: true, min: 0, max: 999 },
  category: { type: String, required: true, minlength: 20 },
  price: { type: Number, required: true, min: 0 },
  seller: { type: sellerSchema, required: true },
});

const Inventory = mongoose.model("Inventory", inventorySchema);

exports.Inventory = Inventory;
