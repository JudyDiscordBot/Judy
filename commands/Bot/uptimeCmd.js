module.exports.run = async (client, message, args) => {
    const API = require("../../utils/shardconfig")
    message.quote(API.time(client.uptime))

}

exports.help = {
    name: 'uptime',
    aliases: ['time'],
    status: 'on',
    onlydev: 'false',
    categoria: 'BOT',
    permissões: [],
    permissõesbot: ['Enviar mensagens'],
    descrição: 'Veja a quanto tempo o bot está online',
    use: 'uptime'
  }