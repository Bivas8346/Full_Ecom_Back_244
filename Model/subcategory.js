const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubcategorySchema = new Schema({
  subcategory_name: {
    type: String,
    required: true,
  },
  categoryid: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  status: {
    type: String,
    default: true,
  },
  type: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("subcategory", SubcategorySchema);
