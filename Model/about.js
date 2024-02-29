const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AboutSchema = new Schema({
  about_title: {
    type: String,
    required: true,
  },
  about_content: {
    type: String,
    required: true,
  },
  about_service: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("about", AboutSchema);
