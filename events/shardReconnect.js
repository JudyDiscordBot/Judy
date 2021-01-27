const { client, config } = require("../index");
const { MessageEmbed, WebhookClient } = require("discord.js")


client.on('shardReconnecting', id => {
    let hook = new WebhookClient(`799668672104759396`, config.webhook.shard)
    let embed = new MessageEmbed()
    embed.setAuthor(`Voltei animada !!!`)
    embed.setColor('#FFC4E7')
    embed.setDescription(`Shard \`${id}\` se reconectou`)
    embed.setFooter(`${client.user.tag} - (${client.user.id})`)
    embed.setTimestamp()
    hook.send(embed)
})