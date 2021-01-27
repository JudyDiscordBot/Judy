const { client, config } = require("../index");
const { MessageEmbed, WebhookClient } = require("discord.js")

client.on('shardDisconnect', (event, shardID) => {
    let hook = new WebhookClient('799668672104759396', config.webhook.shard)
    let embed = new MessageEmbed()
    embed.setColor('#FFC4E7')
    embed.setAuthor(`Tombo Triste`)
    embed.setDescription(`Shard \`${shardID}\` se desconectou`)
    embed.setFooter(`${client.user.tag} - (${client.user.id})`)
    embed.setTimestamp()
    hook.send(embed)
})