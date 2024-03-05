const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchame = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  products_id: {
    type: Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("cart", CartSchame);
