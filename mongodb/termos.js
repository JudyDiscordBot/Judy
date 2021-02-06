const mongoose = require("mongoose");

 const schema = mongoose.Schema({
     id: { type: String, required: true },
 })
 module.exports = mongoose.model('termos', schema)