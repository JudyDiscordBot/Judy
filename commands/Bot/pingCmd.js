const { MessageEmbed } = require('discord.js-light');
const {t} = require('../../events/HandlerEvent')
module.exports.run = async (client, message, args, idioma) => {
      const msg = await message.channel.send(`${idioma.ping.calc}`);
      const Embed = new MessageEmbed()
        .setAuthor(`Ping - Judy` , client.user.displayAvatarURL())
        .setDescription(
          `⌛ ${idioma.ping.lt} **${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms**\n⏲️ ${idioma.ping.ltapi} **${Math.round(client.ws.ping)}ms**`
       )
       .setColor(`#FFC4E7`);
      msg.edit(Embed);
      msg.edit("\u200b");
    };


    exports.help = {
      name: 'ping',
      aliases: [],
      status: 'on',
      onlydev: 'false'
    }