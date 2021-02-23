const {MessageEmbed} = require('discord.js')
const config = require('../../Structures/json/config.json')
module.exports.run = async (client, message, args,) => {

const log = new MessageEmbed()
    .setAuthor(`Changelog - 18/01/2021` , client.user.displayAvatarURL())
    .setDescription(`**${config.emoji.sim} Sistema de música adicionado\n${config.emoji.sim} Comandos modificados**`)
    .setColor(`#FFC4E7`)
    message.quote(log);
}

exports.help = {
    name: 'changelog',
    aliases: ['updates','novidades'],
    status: 'on',
    onlydev: 'false',
    categoria: 'BOT',
    permissões: [],
    permissõesbot: ['Enviar mensagens', 'Enviar Embeds e Links'],
    descrição: 'Veja oque foi adicionado e oque mudou nas atualizações da Judy',
    use: 'changelog'
  }