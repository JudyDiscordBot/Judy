const {client, config} = require("../index")
const Discord = require("discord.js");
const logChannel = require('../mongodb/messagelog.js');

client.on('messageUpdate', async (oldMessage, newMessage) => {
  if (newMessage.author.bot) return;
  logChannel.findOne({ GuildID: oldMessage.guild.id }, async (err, data53) => {
  if(!data53) return;
  let messageChannel2 = client.channels.cache.get(data53.MessageLogChannel)
  let messageUpdateEmbed = new Discord.MessageEmbed()
  .setColor(`#FFC4E7`) // Cor Aleatória
  .setAuthor(`Mensagem Editada - Judy` , client.user.displayAvatarURL()) // Título do embed 
  .setDescription(`**Usuário**\: ${oldMessage.author.tag}
  **Canal**\: <#${oldMessage.channel.id}>`)
  .addField('Mensagem Antiga\:', '```' + ` ${oldMessage.content}  ` + '```')
  .addField('Nova Mensagem\:', '```' + ` ${newMessage.content}  ` + '```')
  .setFooter(`ID do usuário\: ${newMessage.author.id}`)
  .setTimestamp(newMessage.editedTimestamp)

  let pin = new Discord.MessageEmbed()
  .setColor(`#FFC4E7`) // Cor Aleatória
  .setAuthor(`Mensagem Fixada - Judy` , client.user.displayAvatarURL()) // Título do embed 
  .setDescription(`**Usuário**\: ${oldMessage.author.tag}
  **Canal**\: <#${oldMessage.channel.id}>`)
  .addField('Mensagem\:', '```' + ` ${newMessage.content}  ` + '```')
  .setFooter(`ID do usuário\: ${newMessage.author.id}`)
  .setTimestamp(newMessage.editedTimestamp)

  let unpin = new Discord.MessageEmbed()
  .setColor(`#FFC4E7`) // Cor Aleatória
  .setAuthor(`Mensagem Desafixada - Judy` , client.user.displayAvatarURL()) // Título do embed 
  .setDescription(`**Usuário**\: ${oldMessage.author.tag}
  **Canal**\: <#${oldMessage.channel.id}>`)
  .addField('Mensagem\:', '```' + ` ${oldMessage.content}  ` + '```')
  .setFooter(`ID do usuário\: ${newMessage.author.id}`)
  .setTimestamp(newMessage.editedTimestamp)

  let anuncio = new Discord.MessageEmbed()
  .setColor(`#FFC4E7`) // Cor Aleatória
  .setAuthor(`Mensagem Anunciada - Judy` , client.user.displayAvatarURL()) // Título do embed 
  .setDescription(`**Usuário**\: ${oldMessage.author.tag}
  **Canal**\: <#${oldMessage.channel.id}>`)
  .addField('Mensagem\:', '```' + ` ${newMessage.content}  ` + '```')
  .setFooter(`ID do usuário\: ${newMessage.author.id}`)
  .setTimestamp(newMessage.editedTimestamp)

try {
  if(newMessage.pinned) return messageChannel2.send(pin)
    if(newMessage.unpinned) return messageChannel2.send(unpin)
    if(oldMessage.crosspostable) return messageChannel2.send(anuncio)
    messageChannel2.send(messageUpdateEmbed)
} catch (e) {
  return console.log(`Canal de logs deletado no servidor: ${newMessage.guild.id}`)
}

  });
});
