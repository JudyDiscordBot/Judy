const { MessageEmbed } = require('discord.js');
const voto = require('../../mongodb/voto.js')
const {config} = require('../../index')

module.exports.run = async (client, message, args) => {

    voto.findOne({_id:message.author.id}, async (err, sim) => {
     if(sim) {
        const next = sim.newvote
        let time = `${next.getHours().toString().padStart(2, 0) - 3}h`;
        const minutes = next.getMinutes();
        if (minutes) {
            time += `${minutes.toString().padStart(2, 0)}min`;
          }

         return message.quote(`${config.emoji.não} | Você ainda está em cooldown no Zuraaa!`)
     }
     if(!sim) {
         const votaarrombado = new MessageEmbed()
         .setAuthor(`Upvote - Judy` , client.user.displayAvatarURL())
         .setDescription(`Vote para me ajudar a crescer clicando [aqui](https://www.zuraaa.com/bots/757563141637799969/votar)\nSeu voto me ajuda muito !!!!`)
         .setColor(`#FFC4E7`);

        message.quote(votaarrombado)
     }
    })
}

exports.help = {
    name: 'votar',
    aliases: ['upvote','vote'],
    status: 'on',
    onlydev: 'false'
}