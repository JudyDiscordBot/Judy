const Discord = require('discord.js-light');
const pre = require("../../mongodb/prefix");
const mongoose = require("mongoose");
const config = require('../../Structures/json/config.json')
const db = require('../../Structures/json/db.json')
module.exports.run = async(client, message, args) => {
  let prefix = args.join(" ");
        if(!message.member.hasPermission("ADMINISTRATOR") || db.developer.includes(message.author.id)) return message.quote("Você precisa da permissão de `ADMINISTRADOR`` para usar este comando");
        let newprefix = args.join(" ");
        if(!args[0]) return message.quote(`Você precisa informar o novo prefixo`);
      pre.findOne({name: "prefix", preid: message.guild.id}).then(result => {
        let duck = new pre({
            _id: new mongoose.Types.ObjectId(),
            name: "prefix",
            preid: message.guild.id,
            prefix: prefix
          })
          if(args[0].length > 5) {
            return message.reply('Seu prefixo é muito longo, defina um com até 5 caracteres')
            }
            if(message.content.includes('`')) return message.quote(`${message.author} Prefixo alterado com sucesso`);
        message.quote(`${message.author} Prefixo alterado para \`${newprefix}\``);
        if(!result || result == []) {
          duck.save().catch(console.error);
        }else{
          pre.deleteOne({name: "prefix", preid: message.guild.id}).catch(console.error)
          duck.save().catch(console.error)
        }
      })
}

exports.help = {
    name: 'prefixo',
    aliases: ['setprefix', 'prefix'],
    status: 'on',
    onlydev: 'false'
}