
module.exports.run =  async (client, message, args) => {
      const count = require('../../Structures/json/count.json')
      message.quote({
        "embed": {
            "description": `<a:seta_rosa:763819647119392768>  [Me adicione](https://discord.com/oauth2/authorize?client_id=757563141637799969&permissions=8&scope=bot)\n<a:seta_rosa:763819647119392768> [Vote em mim](https://zuraaa.com/bots/757563141637799969/votar)\n\n**<:IconGift:777355098430373888> Membros: [${count.membros}]**\n\`avatar\` | \`serverinfo\` | \`userinfo\` | \`channelinfo\` | \`coronavírus\` | \`docs\` | \`morse\` | \`emoji\` | \`emojify\` | \`choose\` | \`spotify\`\n\n**<:bot_badgestaff:756225965184778411> Moderação: [${count.moderação}]**\n\`slowmode\` | \`clear\` | \`nickname\` | \`lock\` | \`unlock\`\n\n**<a:botdeveloper:763815297186267176> Desenvolvedores: [${count.desenvolvedores}]**\n \`reload\` | \`eval\` |  \`serverinvite\`\n\n**<:earlysupporter:556682087579516968> BOT: [${count.bot}]**\n \`changelog\` | \`votar\` | \`ping\` | \`say\` | \`botinfo\` | \`zuraaa\` | \`channelcommand\`\n\n**<a:wiggle:755807936562856046> Diversão: [${count.diversão}]**\n\`procurado\` | \`primeiraspalavras\` | \`laranjo\`\n\n**🍬 Miscelânea: [${count.miscelânea}]**\n\`playstore\` | \`perfil\`\n\n**<a:disco:800083002952515585> Música: [${count.music}] **\n\`clear-queue\` | \`filter\` | \`loop\` | \`nowplaying\` | \`pause\` | \`play\` | \`queue\` | \`resume\` | \`search\` | \`shuffle\` | \`skip\` | \`stop\` | \`volume\` | \`w-filters\``,
            "color": 16762087,
            "author": {
              "name": "Menu de Ajuda - Judy",
              "url": `${client.user.displayAvatarURL()}`
            }
          }
      });
    };

    exports.help = {
      name: 'ajuda',
      aliases: ['help', 'commands', 'cmds'],
      status: 'on',
      onlydev: 'false'
  }