const axios = require('axios');
const { MessageEmbed } = require('discord.js')
const config = require('../../Structures/json/config.json')
module.exports.run = async (client, message, args) => {
        const baseUrl = "https://corona.lmao.ninja/v2";

        let url, response, corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {

            if(message.content.includes(' \ ')) return message.quote(`${config.emoji.não} | ${message.author} O País não existe ou os dados não estão sendo coletados`)
            if(message.content.includes('`')) return message.quote(`${config.emoji.não} | ${message.author} O País não existe ou os dados não estão sendo coletados`)
            return message.quote(`${config.emoji.não} | ${message.author} ***\`${args[0]}\`*** não existe ou os dados não estão sendo coletados`)
        }

        const embed = new MessageEmbed()
            .setAuthor(`Covid 12 - Judy` , client.user.displayAvatarURL())
            .setTitle(args[0] ? `<:info:788143555931406336> Status do vírus em ${args[0].toUpperCase()}` : 'Total de casos Corona em todo o mundo')
            .setColor('#FFC4E7')
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
            .addFields(
                {
                    name: '<a:a_PepeCorona:771443565943455845> Total de casos:',
                    value: `\`${corona.cases.toLocaleString()}\``,
                    inline: true
                },
                {
                    name: '<:lori_morri:801172646724632626> Total de mortes:',
                    value: `\`${corona.deaths.toLocaleString()}\``,
                    inline: true
                },
                {
                    name: '<:pepe_cruz:751172179546079324> Total recuperado:',
                    value: `\`${corona.recovered.toLocaleString()}\``,
                    inline: true
                },
                {
                    name: '<:WumpusSob:610767361888223252> Casos ativos:',
                    value: `\`${corona.active.toLocaleString()}\``,
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: '<a:a_PepeCorona:771443565943455845> Casos Críticos:',
                    value: `\`${corona.critical.toLocaleString()}\``,
                    inline: true
                },
                {
                    name: '<:pepe_cruz:751172179546079324> Recuperações Hoje:',
                    value: `\`${corona.todayRecovered.toLocaleString().replace("-", "")}\``,
                    inline: true
                },
                {
                    name: '<:lori_morri:801172646724632626> Mortes de hoje:',
                    value: `\`${corona.todayDeaths.toLocaleString()}\``,
                    inline: true
                })

        await message.channel.send(embed)
    };

    exports.help = {
        name: 'corona',
        aliases: ['covid','coronavírus','coronavirus'],
        status: 'on',
        onlydev: 'false'
      }