const Discord = require("discord.js");
const config = require('../../Structures/json/config.json') //
const db = require("../../mongodb/blacklist.js");

module.exports.run = (client, message, args) => {
  const LEGAL = require('../../Structures/json/db.json')
  if(!LEGAL.developer.includes(message.author.id)) return message.quote('**<:negado:755502002619940935> Apenas desenvolvedores do bot podem utilizar este comando!**')
  const id = args[0]
  const motivo = args.splice(1).join(" ")
  const user = client.users.fetch(id)
  if(!id) return message.quote("Você precisa adicionar o ID do usuário")
  if(isNaN(id)) return message.quote(`Você sabia que o ID do usuário é somente números? Então por que colocou: "${id}"?`)
      if(id.length < 18 || id.length > 18) return message.quote("Um ID contém 18 caracteres.")

    db.findOne({_id:id}, (err, a) => {
      if(a) {
        const dd = new Discord.MessageEmbed()
        .setTitle("Blacklist | Erro")
        .setColor("RED")
        .setDescription("Esse usuário já esta na BlackList")
        .setFooter(`Comando Executado por ${message.author.tag} • Versão: ${config.versão}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        return  message.quote(dd);
      } else {
        new db ({
          _id:id,
          autorTag:message.author.tag,
          motivo:motivo
        }).save().catch(err => console.log(err))

        const sucesso = new Discord.MessageEmbed()
        .setTitle("BlackList | Sucesso")
        .setColor("GREEN")
        .setDescription(`O usuário ${user.tag} foi adicionado na blacklist`)
        .setFooter(`Comando Executado por ${message.author.tag} • Versão: ${config.versão}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        return  message.quote(sucesso)
      }
    })
};
exports.help = {
    name: 'addbl',
    aliases: ['starban', 'botban', 'bb'],
    status: 'on',
    onlydev: 'true'
}