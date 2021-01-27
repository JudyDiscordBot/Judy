const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: {type: mongoose.Schema.Types.ObjectId, required: true},
  preid: {type:Number, required:true},
  name: {type:String, default: 'prefix'},
  prefix: {type:String, required:true}
});

module.exports = mongoose.model("prefix", productSchema);