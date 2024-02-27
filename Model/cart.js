const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchame = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products_id:{type : String ,required:true},
});

module.exports = mongoose.model("cart",CartSchame);
