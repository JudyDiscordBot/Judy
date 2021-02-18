const Discord = require('discord.js')
const {client, config} = require('../index')

const adicionada = new Discord.WebhookClient(`799692984408080405`, config.webhook.guild)
client.on("guildCreate", async (guild) => {
  const dono = await client.guilds.fetch(guild.id).then(guilda => client.users.fetch(guilda.ownerID).then(o => `${o.tag} (${o.id})`))
  let embed = new Discord.MessageEmbed()
  .setTitle(`+1 server pra nóis :sunglasses:`)
  .setDescription(`Servidor: ${guild.name}\nID: ${guild.id}\nMembros: ${guild.memberCount} membros\nDono: ${dono}`)
  .setThumbnail(client.user.displayAvatarURL())
  .setTimestamp()
  .setColor('#FFC4E7')
  adicionada.send(embed);

  const f = require("node-fetch")


    f(`https://zuraaa.com/api/bots/${client.user.id}`).then((zu) => zu.json()).then((zua) => {
    zura = zua

    client.channels.cache.get("810936129154187325").setName(`📝│Servidores: ${client.guilds.cache.size}`).catch((e) => console.log(colors.red(e)))
    client.channels.cache.get("810936211321257994").setName(`📝│Votos Zuraaa!:  ${zura.votes.current}`).catch((e) => console.log(colors.red(e)))

  })
})