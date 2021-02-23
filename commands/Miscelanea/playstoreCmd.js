const Discord = require('discord.js');
const moment = require("moment")
const PlayStore = require("google-play-scraper");
const EmbedColor = ``;
moment.locale('pt-br')

module.exports.run = async (client, message, args) => {
    if (!args[0])
      return message.channel.send(
        `Insira junto com o comando o nome do app - ${message.author.username}`
      );

    PlayStore.search({
      term: args.join(" "),
      num: 1
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send(
          `Nun achei - ${message.author.username}!`
        );
      }

      let Embed = new Discord.MessageEmbed()
        .setColor(EmbedColor || "#3030E2")
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title}`)
        .setDescription(App.summary)
        .addField(`Preço:`, App.priceText.replace('FREE', 'Gratis'), true)
        .addField(`Desenvolvedor:`, App.developer, true)
        .addField(`Avaliação:`, App.scoreText, true)
        .setFooter(`${message.author.username}`)
        .setTimestamp();

      return message.channel.send(Embed);
    });
  };

exports.help = {
    name: 'playstore',
    aliases: [],
    status: 'on',
    onlydev: 'false',
    categoria: 'Miscelanea',
    permissões: [],
    permissõesbot: ['Enviar mensagens', 'Enviar Embeds e links'],
    descrição: 'Pesquise um aplicativo na PlayStore',
    use: 'playstore [aplicativo]'
  }
