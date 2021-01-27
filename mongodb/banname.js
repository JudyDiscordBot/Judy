const mongoose = require('mongoose');
const slogSchema = new mongoose.Schema({
    GuildID: String,
    name: String
});

const ServerModel = module.exports = mongoose.model('banname', slogSchema);