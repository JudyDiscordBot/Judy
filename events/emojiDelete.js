const {client, config} = require("../index")
const Discord = require("discord.js");
const serverChannel = require('../mongodb/serverlog.js');

client.on("emojiDelete", async function(emoji){
    serverChannel.findOne({ GuildID: emoji.guild.id }, async (err, data12) => {
        if(!data12) return;
        let messageChannel = client.channels.cache.get(data12.ServerLogChannel)
const animated = emoji.animated ? 'a' : ''
let embed = new Discord.MessageEmbed()
    .setColor(`#FFC4E7`) // Cor Aleatória
  .setAuthor(`Emoji Deletado - Judy` , client.user.displayAvatarURL()) // Título do embed 
  .setDescription(`**Um emoji foi excluido!!!**\n**ID**\: ${emoji.id}\n**Nome:** ${emoji.name}`)
  .setFooter(`${emoji.guild.name}`)
  try {
    messageChannel.send(embed)
  } catch (e) {
    return console.log(`[LOGS] - Canal de logs deletado no servidor: ${emoji.guild.id}`)
  }
});  
});