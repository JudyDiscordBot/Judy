const mongoose = require("mongoose");

const moneySchema = mongoose.Schema({
    userID: String,
    serverID: String,
    bio: String,
    image: String
});

module.exports = mongoose.model("perfil", moneySchema);