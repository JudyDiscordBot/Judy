const mongoose = require("mongoose");

 const schema = mongoose.Schema({
     id: { type: String, required: true },
     date: String,
     
 })
 module.exports = mongoose.model('user', schema)