const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productname: {
    type: String,
    required: true,
  },
  subcatagoryid: {
    type: Schema.Types.ObjectId,
    ref: "subcategory",
    required: true,
  },
  catagoryid: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  productdesc: {
    type: String,
    required: true,
  },
  productsize: {
    type: String,
    required: true,
  },
  productprice: {
    type: Number,
    required: true,
  },
  productbrand: {
    type: String,
    required: true,
  },
  productabout: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("product", ProductSchema);
