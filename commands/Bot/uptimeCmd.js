module.exports.run = async (client, message, args) => {
    const API = require("../utils/shardconfig")
    message.quote(API.time(client.uptime))

}

exports.help = {
    name: 'uptime',
    aliases: ['time'],
    status: 'on',
    onlydev: 'false'
  }