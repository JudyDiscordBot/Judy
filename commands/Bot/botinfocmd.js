const os = require("os");
const pid = require("pidusage")

module.exports.run = async (client, message, args, t) => {

let modelo = os.cpus().map((i) => `${i.model}`)[0]

let dono = await client.users.fetch('742798447253651506');
let dono2 = await client.users.fetch('757928932199891094');
let avatar = dono.avatarURL({ dynamic: true, format: 'png', size: 1024 });
let cpu = await pid(process.pid).then(s =>{return s.cpu.toFixed(2)+" %"})
    const totalUsers = client.users.cache.size
    const totalGuilds = client.guilds.cache.size
    const owner = 742798447253651506
    const API = require("../../utils/shardconfig")
    
    const guildsize = new Intl.NumberFormat().format(totalGuilds);
    const usersize = new Intl.NumberFormat().format(totalUsers);

 await message.channel.send({
  "embed": {
  "description": t.botinfo.info.replace('$', `${guildsize}`).replace('%', `${client.voice.connections.size}`).replace('/', `${usersize}`).replace('@', `${message.author.username}`).replace('+',`\`\`${dono.tag}\`\``).replace('CABO',`\`${dono2.tag}\``).replace('UPTIME', `${API.time(client.uptime)}`),
  "title": "<:review:759923527389806604> Informações",
  "color": '#00D7FF',
  "footer": {
    "text": `Judy foi criada por: ${dono.tag} - http://judy-bot.ga`,
    "icon_url": avatar
  },
  "thumbnail": {
    "url": client.user.displayAvatarURL()
  }
}
}).then(msg => {

 msg.react('777359214800011284')

  let r1F = (reaction, user) => reaction.emoji.id === '777359214800011284' && user.id === message.author.id
          let r1 = msg.createReactionCollector(r1F, {timer: 6000})

          r1.on('collect', (reaction, user) => {
          reaction.users.remove(client.user.id);
          
           const reactinfo = {
                "title": "<:review:759923527389806604> Outras informações ^-^ ",
                "description": `Ja que você ${message.author}, ficou mais curioso ainda, estou te mandando algumas informações sobre minha máquina !!!`,
                "color": "#00D7FF",
                "thumbnail": {
                "url": client.user.displayAvatarURL()
              },
              "footer": {
                "text": `Judy foi criada por: ${client.users.cache.get('742798447253651506').tag} - http://judy-bot.ga`,
                "icon_url": avatar
              },
            "fields": [ {
            "name": "<:memRam:755518278272811188>・Memória RAM",
            "value": `\`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB de 8GB\``,
            "inline": true
          },
          {
          "name": "<:cpu:755518314070933545>・CPU",
            "value": `\`${cpu} de CPU\``,
            "inline": true
          },
          {
          "name": `<:info:788143555931406336>・Hospedagem`,
            "value": `**[Contabo](https://contabo.com)**`,
            "inline": true
          },
          {
          "name": '<:ubuntu:806301215382044722>・Sistema Operacional',
            "value": `\`Ubuntu\``,
            "inline": true
          },
          {
          "name": `<:engrenagem:755520411827175424>・Processador`,
            "value": `\`${os.cpus()[0].model}\``,
            "inline": true
          }
        ]
      }
            msg.edit({embed: reactinfo })

          })

  })

};

exports.help = {
  name: 'botinfo',
  aliases: ['info','bi','informações','infobot'],
  status: 'on',
  onlydev: 'false'
} 
