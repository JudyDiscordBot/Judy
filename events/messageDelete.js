const {client, config} = require("../index")
const colors = require("colors");
const Discord = require("discord.js");
const logChannel = require('../mongodb/messagelog.js');

client.on('messageDelete', async (message) => {
  if (message.author.bot) return;
    logChannel.findOne({ GuildID: message.guild.id }, async (err, data12) => {
    if(!data12) return;
    let messageChannel = client.channels.cache.get(data12.MessageLogChannel)
    let messageDeleteEmbed = new Discord.MessageEmbed()
    .setColor(`#FFC4E7`) // Cor Aleatória
  .setAuthor(`Mensagem Deletada - Judy` , client.user.displayAvatarURL()) // Título do embed 
  .setDescription(`**Usuário**\: ${message.author.tag}
  **Canal**\: <#${message.channel.id}>`)
  .addField('Mensagem \:', '```' + ` ${message.content} ` + '```')
  .setFooter(`ID do usuário\: ${message.author.id}`)

  try {
    messageChannel.send(messageDeleteEmbed)
  } catch (e) {
    return console.log(`Canal de logs deletado no servidor: ${message.guild.id}`)
  }
    });
  });