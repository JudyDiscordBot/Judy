const { MessageEmbed } = require('discord.js');
module.exports.run = async (client, message, args) => {
      const msg = await message.channel.send("Calculando...");
      const Embed = new MessageEmbed()
        .setAuthor(`Ping - Judy` , client.user.displayAvatarURL())
        .setDescription(
          `⌛ Latência: **${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms**\n⏲️ Latência da API: **${Math.round(client.ws.ping)}ms**`
       )
       .setColor(`#FFC4E7`);
      msg.edit(Embed);
      msg.edit("\u200b");
    };


    exports.help = {
      name: 'ping',
      aliases: [],
      status: 'on',
      onlydev: 'false',
      categoria: 'BOT',
      permissões: [],
      permissõesbot: ['Enviar mensagens', 'Enviar Embeds e Links'],
      descrição: 'Veja o tempo de resposta do Bot.',
      use: 'ping'
    }