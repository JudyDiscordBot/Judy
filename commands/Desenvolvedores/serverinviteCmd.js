const { MessageEmbed } = require('discord.js-light');
module.exports.run = async (client, message, args) => {
          const db = require('../../Structures/json/db.json')
     if(!db.developer.includes(message.author.id)) return message.quote('**<:negado:755502002619940935> Apenas desenvolvedores do bot podem utilizar este comando!**')
     if (!args[0]) return message.quote("Eu não tenho bola de cristal pra adivinhar qual server você quer o invite")
      const server = args[0]
      function randomChoice(arr) { return arr[Math.floor(Math.random() * arr.length)]}; idCanais = []; client.guilds.cache.get(server).channels.cache.forEach((channel) => {idCanais.push(channel.id)});
      canal = randomChoice(idCanais); client.guilds.cache.get(server).channels.cache.get(canal).createInvite().then(i => message.quote(`https://discord.gg/${i.code}`))
   }
 
   exports.help = {
    name: 'serverinvite',
    aliases: [],
    status: 'on',
    onlydev: 'true'
  }

  //se tiver alguma coisa ai tu me chama 
  