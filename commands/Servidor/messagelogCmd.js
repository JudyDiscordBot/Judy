const Discord = require('discord.js-light')
const mongoose = require('mongoose')
const logChannel = require('../../mongodb/messagelog.js')

module.exports.run = async (client, message, args, prefix) => {
  let channel = message.mentions.channels.first() || client.channels.cache.get(args[0])

  if(!message.member.hasPermission("ADMINISTRATOR")) {
  return message.quote("Você não tem permissão para usar este comando")
  }

  if(!channel) {
  return message.quote(`Ops ! Use ${prefix}messagelog #canal`)
  }

  logChannel.findOne({ GuildID: message.guild.id},async(err, data) => {
  if(err) console.log(err)
  if(!data) {
  let newSettings = new logChannel({
      GuildID: message.guild.id,
      MessageLogChannel: channel.id
      })
      newSettings.save()
      message.quote(`Ok ! Estarei mandando os logs para o canal: <#${channel.id}>`)
    } else {
    
      message.quote(`Parece que já exite um canal de logs nesse servidor. Use \`${prefix}resetar\``)
    }
  })
}
exports.help = {
    name: 'messagelog',
    aliases: ['auditoria'],
    status: 'on',
    onlydev: 'false'
}