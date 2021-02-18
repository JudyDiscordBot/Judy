const Discord = require('discord.js');
const config = require('../../Structures/json/config.json')
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
        return  message.quote('Já ta na blacklist pai');
      } else {
        new db ({
          _id:id,
          autorTag:message.author.id,
          motivo:motivo
        }).save().catch(err => console.log(err))

        return  message.quote(`O usuário ${user.name} foi adicionado na blacklist`)
      }
    })
};
exports.help = {
    name: 'addbl',
    aliases: ['judyban', 'botban', 'bb'],
    status: 'on',
    onlydev: 'true'
}