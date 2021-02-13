const mongoose = require("mongoose");

 const schema = mongoose.Schema({
    guild: { type: String, required: true },
    channel: String
 })
 module.exports = mongoose.model('channelcmd', schema)