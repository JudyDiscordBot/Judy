const mongoose = require('mongoose');
const slogSchema = new mongoose.Schema({
    GuildID: String,
    ServerLogChannel: String
});

const ServerModel = module.exports = mongoose.model('ServerLog', slogSchema);