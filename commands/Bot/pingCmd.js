const { MessageEmbed } = require('discord.js-light');
module.exports.run = async (client, message, args, t) => {
      const msg = await message.channel.send(`${t.ping.calc}`);
      const Embed = new MessageEmbed()
        .setAuthor(`Ping - Judy` , client.user.displayAvatarURL())
        .setDescription(
          `⌛ ${t.ping.lt} **${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms**\n⏲️ ${t.ping.ltapi} **${Math.round(client.ws.ping)}ms**`
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