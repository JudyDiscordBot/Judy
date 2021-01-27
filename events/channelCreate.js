const {client, config} = require("../index")
const Discord = require("discord.js");
const serverChannel = require('../mongodb/serverlog.js');

client.on("channelCreate", async function(channel , user){
     if(channel.type == 'dm') return;
    serverChannel.findOne({ GuildID: channel.guild.id }, async (err, data12) => {
        if(!data12) return;
        let messageChannel = client.channels.cache.get(data12.ServerLogChannel)
        let embed = new Discord.MessageEmbed()
    .setColor(`#FFC4E7`) // Cor Aleatória
  .setAuthor(`Canal Criado - Judy` , client.user.displayAvatarURL()) // Título do embed 
  .setDescription(`**Um canal foi criado no servidor!!!**\n**Canal**\: <#${channel.id}>`)
  .setFooter(`ID do canal: ${channel.id}`)

  try {
    messageChannel.send(embed)
  } catch (e) {
    return console.log(`Canal de logs deletado no servidor: ${channel.guild.id}`)
  }
    });  
});