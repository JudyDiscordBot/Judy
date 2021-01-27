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
    message.quote('```js\n' + err + '```')
            }
            const nitroav = user.avatar || 'https://cdn.discordapp.com/embed/avatars/0.png'
			let abacate = message.mentions.users.first() || message.author
            const corno = message.guild.member(abacate);
            const nitro = nitroav.startsWith('a_') ? '<:nitro:556678539601248257>' : ' ‍'


const badge = client.users.cache.get(user.id).flags.toArray().join(' ').replace('HOUSE_BALANCE', '<:hypesquad_balance:556683254586015765>').replace('HOUSE_BRILLIANCE', '<:hypesquad_brilliance:556683174563020810>').replace('HOUSE_BRAVERY', '<:hypesquad_bravery:556683071529811983>').replace('<:bughunter:556682363120254979>', ':Hunter:').replace('BUGHUNTER_LEVEL_2', '<:bughunter:556682363120254979>').replace('DISCORD_PARTNER', '<:partner2:767235399943979038>').replace('VERIFIED_BOT', '<:verified_bot:763819634369495063>').replace('EARLY_SUPPORTER', '<:earlysupporter:556682087579516968>').replace('HYPESQUAD_EVENTS', '<:hypesquadevents:556682499569221662>').replace('TEAM_USER', '<:staff:556680099865427978>').replace('DISCORD_EMPLOYEE', '<:staff:556680099865427978>').replace('EARLY_VERIFIED_DEVELOPER', '<a:botdeveloper:763815297186267176>').replace('VERIFIED_DEVELOPER', ' ‍') || ' ‍'

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

        const embed = new MessageEmbed()
            .setColor(`#FFC4E7`) // Cor Aleatória
            .setAuthor(`Userinfo - ${user.tag}` , client.user.displayAvatarURL())
            .setThumbnail(user.displayAvatarURL({dynamic : true}) || 'https://cdn.discordapp.com/embed/avatars/0.png')
            .addField(`<:channel:777360283920105534> Tag do usuário:` , `${user.username}#${user.discriminator}`, true)
            .addField(`<:id:755517738205708411> ID: ` , `${user.id}`, true)
            .addField(`<:regras:782612560167436288> Status: ` , `${status}`, true)
            .addField(`Emblemas do usuário` , `${API.badges(client.users.cache.get(user.id).flags.toArray())} ${nitro}`, true)
            .addField(`<:lista:777360508022030357> Jogando:  ` , user.presence.activities[0] ? user.presence.activities[0].name : `Esse usuário não esta jogando nada.` , true)
            .addField(`<a:Coroa:760149239153033216> Conta criada em: ` , moment.utc(user.createdAt).format("LL") , true)
                       
        await message.channel.send(embed)
    }

exports.help = {
    name: 'ui',
    aliases: ['userinfo'],
    status: "on",
    onlydev: 'false'
}