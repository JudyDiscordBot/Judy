const {MessageEmbed} = require('discord.js')
const config = require('../../Structures/json/config.json')
module.exports.run = async (client, message, args) => {

    if(args[0]) {
        const command = await client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()))
        if(!command) return message.quote(`${config.emoji.não} | Esse comando não existe`)

        const help = new MessageEmbed()
        .setTitle(':wave: | ' + command.help.name.split(' ').map(str => str.slice(0, 1).toUpperCase() + str.slice(1)).join(' '))
        .addField(':interrobang: Como utilizar ?', `\`${config.bot.prefix}${command.help.use}\`` , false)
        .addField(':book: Descrição:', `\`${command.help.descrição}\`` , false)
        .addField(':small_blue_diamond: Permissões do bot:', `\`${command.help.permissõesbot.join('`,`') || `Esse comando não necessita de permissões`}\``, false)
        .addField(':small_orange_diamond: Permissões do usuário:', `\`${command.help.permissões.join('`,`') || `Esse comando não necessita de permissões especias para ser executado`}\``, false)
        .setColor('#FFC4E7')
        .setTimestamp()
        .setFooter('Judy (c) 2021')

        if(command.help.aliases.join(',') !== ''){
            help.addField(':twisted_rightwards_arrows: Sinônimos:',  `\`${command.help.aliases.join('`,`')}\``, false )
        }
    
        return message.quote(help)
    }
const embed = new MessageEmbed()
embed.addFields(
        { name: `Membros (${client.commands.filter(command => command.help.categoria === "Membros").size})`, value: `${client.commands.filter(command => command.help.categoria === "Membros").map(e => `\`${config.bot.prefix}${e.help.name}\``).join(" **|** ")}` + '.', inline: false },
        { name: `Moderação (${client.commands.filter(command => command.help.categoria === "Moderacao").size})`, value: `${client.commands.filter(command => command.help.categoria === "Moderacao").map(e => `\`${config.bot.prefix}${e.help.name}\``).join(" **|** ")}` + '.', inline: false },
        { name: `Desenvolvedores (${client.commands.filter(command => command.help.categoria === "Desenvolvedor").size})`, value: `${client.commands.filter(command => command.help.categoria === "Desenvolvedor").map(e => `\`${config.bot.prefix}${e.help.name}\``).join(" **|** ")}` + '.', inline: false },
        { name: `BOT (${client.commands.filter(command => command.help.categoria === "BOT").size})`, value: `${client.commands.filter(command => command.help.categoria === "BOT").map(e => `\`${config.bot.prefix}${e.help.name}\``).join(" **|** ")}` + '.', inline: false },
        { name: `Diversão (${client.commands.filter(command => command.help.categoria === "Diversao").size})`, value: `${client.commands.filter(command => command.help.categoria === "Diversao").map(e => `\`${config.bot.prefix}${e.help.name}\``).join(" **|** ")}` + '.', inline: false },
        { name: `Miscelânea (${client.commands.filter(command => command.help.categoria === "Miscelanea").size})`, value: `${client.commands.filter(command => command.help.categoria === "Miscelanea").map(e => `\`${config.bot.prefix}${e.help.name}\``).join(" **|** ")}` + '.', inline: false },
        { name: `Música (${client.commands.filter(command => command.help.categoria === "Música").size})`, value: `${client.commands.filter(command => command.help.categoria === "Música").map(e => `\`${config.bot.prefix}${e.help.name}\``).join(" **|** ")}` + '.', inline: false },
        { name: `Servidor (${client.commands.filter(command => command.help.categoria === "Servidor").size})`, value: `${client.commands.filter(command => command.help.categoria === "Servidor").map(e => `\`${config.bot.prefix}${e.help.name}\``).join(" **|** ")}` + '.', inline: false }
        )
        embed.setAuthor("Menu de Ajuda - Judy",client.user.displayAvatarURL())
        embed.setColor('#FFC4E7')
        embed.setTimestamp()
        embed.setFooter('Judy (c) 2021')
        embed.setThumbnail('https://cdn.discordapp.com/emojis/811328252953493536.png?v=1')

        message.quote(embed)
}

    exports.help = {
      name: 'ajuda',
      aliases: ['help', 'commands', 'cmds'],
      status: 'on',
      onlydev: 'false',
      categoria: 'BOT',
      permissõesbot: ['Enviar mensagens', 'Enviar Embeds e Links'],
      permissões: [],
      descrição: 'Veja os comandos do bot.',
      use: 'ajuda <comando>'
  }