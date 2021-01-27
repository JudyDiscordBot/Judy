const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
    GuildID: String,
    MessageLogChannel: String
});

const MessageModel = module.exports = mongoose.model('MessageLog', logSchema);