 const Discord = require('discord.js-light');
exports.run = async (client, message, args, config) => {
  const db = require('../../Structures/json/db.json')
  if(!db.developer.includes(message.author.id)) return message.quote('**<:negado:755502002619940935> Apenas desenvolvedores do bot podem utilizar este comando!**')
  
  const perms = require('../../Structures/json/perms.json')
  
  if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.quote("**Eu não tenho permissão de \`${perms.MANAGE_CHANNELS}\`**")
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.quote(`Você não tem permissão de \`${perms.MANAGE_CHANNELS}\``);

  let card = new Discord.MessageEmbed()
    .setAuthor(`Lock` , client.user.displayAvatarURL())
    .setDescription(`${message.author}, Cilque em 🔒 para fechar o canal !`)
    .setColor('#FFC4E7')
    message.quote(card).then(msg => {

  msg.react('🔒') 

  const filtro = (reacao, usuario) => reacao.emoji.name === '🔒' && usuario.id === message.author.id; 
  const coletor = msg.createReactionCollector(filtro);

  coletor.on('collect', () => { 

    let card2 = new Discord.MessageEmbed()
    .setAuthor(`Lock` , client.user.displayAvatarURL())
    .setDescription(`${message.author}, Canal fechado com sucesso!`)
    .setColor('#FFC4E7')

    msg.edit(card2);
  
      if (!client.lockit) client.lockit = [];
      message.channel.createOverwrite(message.guild.id, {
              SEND_MESSAGES: false  
      })

     
     
      })
  }
                                
                                )};

                                exports.help = {
                                  name: 'lock',
                                  aliases: ['trancar'],
                                  status: 'off',
                                  onlydev: 'false'
                                }