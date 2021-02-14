const db = require('../../mongodb/channelcmd')
const config = require('../../Structures/json/config.json')
module.exports.run = async (client, message, args) => {
 let channel = message.mentions.channels.first() || client.channels.fetch(args[0]) 
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.quote("Você não tem permissão para usar este comando")

    if(!channel) {
        return message.quote(`Ops ! Use ${prefix}serverlog #canal`)
        }

        if(!channel.id){
          return message.quote(`${config.emoji.não} | Canal inválido`)
        }

db.findOne({guild:message.guild.id}, (err, a) => {
        if(a) {
            return  message.quote(`[BETA] Esse servior já tem um canal de comandos configurado.\nUse \`${config.bot.prefix}resetar\` para configurar um novo.`)
            }
          if(!a){
            new db ({
              guild:message.guild.id,
              channel:channel.id,
            }).save().catch(err => console.log(err))
    
            return  message.quote(`Feito !!! Agora os usuários poderão usar comandos apenas no <#${channel.id}> `)
        }
    })
}

exports.help = {
    name: 'channelcommand',
    aliases: [],
    status: 'on',
    onlydev: 'false'
}