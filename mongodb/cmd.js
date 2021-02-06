const mongoose = require("mongoose");

 const schema = mongoose.Schema({
    id: { type: String, required: true },
    guild: String,
    ping: String,
    date: String,
    command: String,
    argumento: String
     
 })
 module.exports = mongoose.model('cmd', schema)