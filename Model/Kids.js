const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KidsSchema = new Schema({
    productname: {
      type: String,
      required: true,
    },
    producttype: {
      type: String,
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

  module.exports =  mongoose.model("kidsproduct", KidsSchema);