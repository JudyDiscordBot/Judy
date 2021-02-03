const {MessageEmbed} = require('discord.js-light')
module.exports.run = async (client, message, args) => {

let bot = args[0]

if (!args.length) {
    bot = client.user.id;
}

if(isNaN(bot)) return message.quote(`Insira um ID válido`)

const f = require("node-fetch")


    f(`https://zuraaa.com/api/bots/${bot}`).then((zu) => zu.json()).then((zua) => {
    zura = zua
try {
    let desc = zura.details.shortDescription
} catch {
     return message.quote(`Bot não encontrado`)
}
let zuraaainfo = new MessageEmbed()
.setAuthor(zura.username +`#`+ zura.discriminator)
.setThumbnail(`https://cdn.discordapp.com/avatars/${zura.id}/${zura.avatar}.png`)
.setDescription(zura.details.shortDescription)
.setColor(`#FFC4E7`)
.addField(`Prefixo`, `\`${zura.details.prefix}\`` , true)
.addField(`Biblioteca`, `\`${zura.details.library}\``, true)
.addField(`Dono`, `<@${zura.owner}> (${zura.owner})` , true)
.addField(`Votos`, `\`${zura.votes.current}\`` , true)
.addField(`Tags`, `${zura.details.tags.join('\n').replace('anime' , 'Anime').replace('dashboard' , 'Dashboard').replace('diversao' , 'Diversão').replace('utilidades' , 'Utilidades').replace('social' , 'Social').replace('jogos' , 'Jogos').replace('musica' , 'Música').replace('moderacao' , 'Moderação').replace('economia' , 'Economia').replace('fortnite' , 'Fortnite').replace('lol' , 'League of Legends').replace('minecraft' , 'Minecraft').replace('hytale' , 'Hytale').replace('nsfw' , 'NSFW').replace('outros' , 'Outros')}`, true)
.addField(`Aprovado por`, `<@${zura.approvedBy}> (${zura.approvedBy})` , true)


message.quote(zuraaainfo)

})
} 

exports.help = {
    name: 'zuraaa',
    aliases: ['zuraaainfo'],
    status: 'on',
    onlydev: 'false'
}