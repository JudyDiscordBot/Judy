const Discord = require('discord.js')
const {clearerro} = require('../../functions/erro')
const config = require('../../Structures/json/config.json')
module.exports.run = async (client, message, args) => {
    

        if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
            return message.quote(erro);
            let reason = args[0];
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.quote("**Eu não tenho permissão para executar esse comando**")
    if (reason < 2) return message.quote(clearerro)
        if (!args[0]) {
            return message.quote(clearerro)
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100 ) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount,true,);
        await message.channel.send(`${config.emoji.sim} | ${message.author} Apaguei \`${deleteAmount}\` mensagens`)
    }

    exports.help = {
        name: 'clear',
        aliases: ['apagar','purge','clean'],
        status: 'on',
        onlydev: 'false'
   }