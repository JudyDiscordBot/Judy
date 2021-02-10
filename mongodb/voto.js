const mongoose = require("mongoose");

 const schema = mongoose.Schema({
     _id: { type: String, required: true },
     newvote: String
 })
 
 module.exports = mongoose.model('voto', schema)