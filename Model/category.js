const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const CategorySchema = new Schema({
    Category_name: {
        type:String,
        required:true
    },
    status: {
        type:String,
        default:true
    },
    type: {
        type:Boolean,
        default:true
    }
});

module.exports = mongoose.model("category",CategorySchema);