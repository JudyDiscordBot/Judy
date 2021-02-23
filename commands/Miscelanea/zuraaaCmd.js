const {MessageEmbed} = require('discord.js')
module.exports.run = async (client, message, args) => {

let bot = args[0]

if (!args.length) {
    bot = client.user.id;
}

if(isNaN(bot)) return message.quote(`Insira um ID válido`)

const f = require("node-fetch")

if (!args[0]) {
    return message.quote('Mencione um bot ou insira um ID válido')
}
let u = message.mentions.users.first() || client.users.cache.find(membro1 => membro1.id === args[0]) || client.users.cache.find(membro1 => membro1.username === args[0]) || client.users.cache.find(membro1 => membro1.tag === args[0]) || client.user
if (!u === u.bot) return message.quote("Esse usuário não é um bot")

    f(`https://zuraaa.com/api/bots/${u.id}`).then((zu) => zu.json()).then((zua) => {
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
    onlydev: 'false',
    categoria: 'Miscelanea',
    permissões: [],
    permissõesbot: ['Enviar mensagens', 'Enviar Embeds e Links'],
    descrição: 'Receba informações sobre algum bot que esta no Zuraaa!',
    use: 'zuraaa [bot]'
}