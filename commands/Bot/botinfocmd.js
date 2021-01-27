const Discord = require("discord.js");
const os = require("os");

module.exports.run = async (client, message, args) => {

let modelo = os.cpus().map((i) => `${i.model}`)[0]

let dono = await client.users.fetch('742798447253651506');
let dono2 = await client.users.fetch('757928932199891094');
let avatar = dono.avatarURL({ dynamic: true, format: 'png', size: 1024 });

    const totalUsers = client.users.cache.size
    const totalGuilds = client.guilds.cache.size
    const owner = 742798447253651506
    const API = require("../../utils/shardconfig")
    
    const guildsize = new Intl.NumberFormat().format(totalGuilds);
    const usersize = new Intl.NumberFormat().format(totalUsers);

  const botinfo = new Discord.MessageEmbed()
  .setTitle("<:review:759923527389806604> Informações")
  .setThumbnail(client.user.displayAvatarURL())
  .setColor("#00D7FF")
  .setDescription(`**<a:yayy:755528352433176729> Olá eu sou a Judy um simples bot para discord.**\n\n> <a:rdg_sonicnite:760150886772375584> Tenho muitos comandos para moderação, pesquisas, logs e muito mais !!! Estou em **${guildsize} servidores** e conheço mais ou menos **${usersize} usuários**\n\nFui desenvolvida em <:JavaScript:760148418286452756> [JavaScript](https://nodejs.org/en/) utilizando <:lunox_djs:760148013585793045> [Discord.js](https://discord.js.org/#/)\n\n <a:pastel_festaOSP:760150240841302047> Agradeço a você ${message.author.username} por ter curiosidade de ver minhas informações, se quiser aproveitar mais ainda os meus comandos e recursos me adicione em seu servidor clicando [aqui](https://discord.com/oauth2/authorize?client_id=757563141637799969&permissions=8&scope=bot). <:lansabraba:759923711872073761>\n\n<a:danacomigo:760151015583514655> Eu fui criada por \`${dono.tag}\` e \`${dono2.tag}\` no dia **21 de setembro de 2020**, mas como gosto muito de dormir acordei faz só **${API.time(client.uptime)} <a:sono_:760311151489450025> **`)
  .setFooter(`Judy foi criada por: ${dono.tag} - http://judy-bot.ga` , avatar)
  

 await message.channel.send(botinfo).then(msg => {

 msg.react('777359214800011284')

  let r1F = (reaction, user) => reaction.emoji.id === '777359214800011284' && user.id === message.author.id
          let r1 = msg.createReactionCollector(r1F, {timer: 6000})

          r1.on('collect', (reaction, user) => {
          reaction.users.remove(client.user.id);

    const reactinfo = new Discord.MessageEmbed()
    .setTitle("<:review:759923527389806604> Outras informações ^-^ ")
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#00D7FF")
    .setDescription(`Ja que você ${message.author}, ficou mais curioso ainda, estou te mandando algumas informações sobre minha máquina !!!`)
   .addField(`<:memRam:755518278272811188>・Memória RAM`,`\`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB de 512MB\``, true)
  .addField(`<:cpu:755518314070933545>・CPU`, `\`${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}% de CPU\``, true)
  .addField(`<:host:777359214800011284>・Hospedagem`, `**[Contabo](https://contabo.com) e [Repl](https://repl.it)**`)
  .addField(`<:w_windows:760148567712858123> ・Sistema Operacional`,`\`Windows\``, true)
  .addField(`<:engrenagem:755520411827175424>・Processador`,`\`${os.cpus()[0].model}\``,true) 
  .setFooter(`Judy foi criada por: ${client.users.cache.get('742798447253651506').tag} - http://judy-bot.ga` , avatar)
            msg.quote(reactinfo)

          })

  })

};

exports.help = {
  name: 'botinfo',
  aliases: ['info','bi','informações','infobot'],
  status: 'on',
  onlydev: 'false'
} 
