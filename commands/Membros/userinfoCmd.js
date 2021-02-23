const { MessageEmbed } = require('discord.js');
const API = require("../../utils/shardconfig")
const moment = require('moment');


module.exports.run = async (client, message, args) => {

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
    return message.quote('```js\n' + err + '```')
            }
            const nitroav = user.avatar || 'https://cdn.discordapp.com/embed/avatars/0.png'
			let abacate = message.mentions.users.first() || message.author
            const corno = message.guild.member(abacate);
            const nitro = nitroav.startsWith('a_') ? '<:nitro:556678539601248257>' : ' ‍'

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:760330359274602517> Online";
                break;
            case "dnd":
                status = "<:dnd:760330408897937419> Não Pertube";
                break;
            case "idle":
                status = "<:idle2:556683656253538324> Ausente";
                break;
            case "offline":
                status = "<:offline:760331120767402016> Offiline";
                break;
        }

try {
 let bandage = API.badges(client.users.cache.get(user.id).flags.toArray())
 
} catch(err) {
     bandage = ' '
 }
        const embed = new MessageEmbed()
            .setColor(`#FFC4E7`) // Cor Aleatória
            .setAuthor(`Userinfo - ${user.tag}` , client.user.displayAvatarURL())
            .setThumbnail(user.displayAvatarURL({dynamic : true}) || 'https://cdn.discordapp.com/embed/avatars/0.png')
            .addField(`<:channel:777360283920105534> Tag do usuário:` , `${user.username}#${user.discriminator}`, true)
            .addField(`<:id:755517738205708411> ID: ` , `${user.id}`, true)
            .addField(`<:regras:782612560167436288> Status: ` , `${status}`, true)
            .addField(`Emblemas do usuário` , `${bandage} ${nitro}`, true)
            .addField(`<:lista:777360508022030357> Jogando:  ` , user.presence.activities[0] ? user.presence.activities[0].name : `Esse usuário não esta jogando nada.` , true)
            .addField(`<a:Coroa:760149239153033216> Conta criada em: ` , moment.utc(user.createdAt).format("LL") , true)
                       
        await message.channel.send(embed)
    }

exports.help = {
    name: 'userinfo',
    aliases: ['ui'],
    status: "on",
    onlydev: 'false',
    categoria: 'Membros',
    permissões: [],
    permissõesbot: ['Enviar mensagens', 'Enviar Embeds e links'],
    descrição: 'Veja informações sobre um usuário',
    use: 'userinfo <user>'
}