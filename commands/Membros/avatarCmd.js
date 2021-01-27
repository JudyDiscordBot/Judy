const Discord = require("discord.js"); //Conexão com a livraria discord.js
const config = require('../../Structures/json/config.json')
exports.run = async (client, message, args) => { //estrutura básica de criação de um comando

  let user = message.mentions.users.first();
  try {

  if (!args.length) {
      user = message.author;
  } else {
      if (Number(args[0])) {
           user = await client.users.fetch(args[0]);
      }

      if (!user) {
          message.guild.members.cache.forEach(member => {
              if (member.displayName === args.join(' '))
                  user = member.user;
          });
      }

      if (!user) {
          message.guild.members.cache.forEach(member => {
              if (member.displayName.toLowerCase().startsWith(args.join(' ').toLowerCase())) {
                  user = member.user;
              }
          });
      }
  }

} catch (err) {
  return message.quote(`**${config.emoji.não} | ${message.author} Eu procurei em todo lugar mas não encontrei o usuário que você me pediu.**`)
          }

  let avatar = user.avatarURL({ dynamic: true, format: 'png', size: 2048 }); 
  let embed = new Discord.MessageEmbed()
    .setTitle(`Avatar de ${user.tag}`) 
    .setColor(`#FFC4E7`)
    .setDescription(`**Clique [Aqui](${avatar}) para baixar esse avatar**!`)
    .setImage(avatar)
    
if(user.id === '757928932199891094') {
    embed.setAuthor(`Judy Developer` ,`https://cdn.discordapp.com/attachments/537404035192455178/792411851345625108/developer.png`)
}

if(user.id === `742798447253651506`) {
    embed.setAuthor(`Judy Developer` ,`https://cdn.discordapp.com/attachments/537404035192455178/792411851345625108/developer.png`)
}

if(user.id === '717766639260532826') {
    embed.setAuthor(`Judy Developer` ,`https://cdn.discordapp.com/attachments/537404035192455178/792411851345625108/developer.png`)
}


if(user.id === `552855305277538317`) {
    embed.setAuthor(`Judy VIP` ,`https://cdn.discordapp.com/attachments/537404035192455178/792412038215368724/A_EstrelinhaTKF.gif`)
}

embed.setAuthor(`Judy User` ,`https://media.discordapp.net/attachments/537404035192455178/792408900095049768/user.png`)

 await message.channel.send(`${config.emoji.sim} | ${message.author} Aqui está o avatar.` , embed);



};

exports.help = {
  name: 'avatar',
  aliases: [],
  status: 'on',
  onlydev: 'false'
}