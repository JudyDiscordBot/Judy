const {MessageEmbed} = require('discord.js')
module.exports.run =  async (client, message, args) => {
      const count = require('../../Structures/json/count.json')
         const embed = new MessageEmbed()
        .setDescription(`<a:seta_rosa:763819647119392768>  [Me adicione](https://discord.com/oauth2/authorize?client_id=757563141637799969&permissions=8&scope=bot)\n<a:seta_rosa:763819647119392768> [Vote em mim](https://zuraaa.com/bots/757563141637799969/votar)\n\n**<:IconGift:777355098430373888> Membros: [${count.membros}]**\n\`avatar\` | \`serverinfo\` | \`userinfo\` | \`channelinfo\` | \`coronavírus\` | \`docs\` | \`morse\` | \`emoji\` | \`emojify\` | \`choose\` | \`spotify\`\n\n**<:bot_badgestaff:756225965184778411> Moderação: [${count.moderação}]**\n\`slowmode\` | \`clear\` | \`nickname\` | \`lock\` | \`unlock\`\n\n**<a:botdeveloper:763815297186267176> Desenvolvedores: [${count.desenvolvedores}]**\n \`reload\` | \`eval\` |  \`serverinvite\`\n\n**<:earlysupporter:556682087579516968> BOT: [${count.bot}]**\n \`changelog\` | \`votar\` | \`ping\` | \`say\` | \`botinfo\` | \`zuraaa\` | \`channelcommand\`\n\n**<a:wiggle:755807936562856046> Diversão: [${count.diversão}]**\n\`procurado\` | \`primeiraspalavras\` | \`laranjo\`\n\n**🍬 Miscelânea: [${count.miscelânea}]**\n\`playstore\`\n\n**<a:disco:800083002952515585> Música: [${count.music}] **\n\`clear-queue\` | \`filter\` | \`loop\` | \`nowplaying\` | \`pause\` | \`play\` | \`queue\` | \`resume\` | \`search\` | \`shuffle\` | \`skip\` | \`stop\` | \`volume\` | \`w-filters\``)
        .setAuthor("Menu de Ajuda - Judy",client.user.displayAvatarURL())
        .setColor('#FFC4E7')
        .setTimestamp()
        .setFooter('Judy (c) 2021')
        .setThumbnail('https://cdn.discordapp.com/emojis/811328252953493536.png?v=1')
        .setImage('https://cdn.discordapp.com/attachments/802965094408650796/802965243780792370/pdcJudyBot.png')
        .addField('<:dbl:811270900531986492> Discord Bot List', '[Clique aqui](https://top.gg/bot/757563141637799969)' , true)
        .addField('<:star_desconfiada:796457831934853140> Star\™️', '[Adicione a Star\™️](https://discordapp.com/oauth2/authorize?client_id=719524114536333342&scope=bot&permissions=2146958591)', true)
        .addField('<:sad_cat_joinha:773969900729401445> Meu servidor de suporte', '[Clique aqui para entrar](https://discord.gg/p3wwQSEFw6)',true)
        message.quote(embed)  
          
      }

    exports.help = {
      name: 'ajuda',
      aliases: ['help', 'commands', 'cmds'],
      status: 'on',
      onlydev: 'false'
  }