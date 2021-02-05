const config = require("./Structures/json/config.json");
const colors = require("colors");
const {Client, Collection} = require("discord.js-light");
const client = new Client({
    cacheGuilds: true,
    cacheChannels: false,
    cacheOverwrites: false,
    cacheRoles: true,
    cacheEmojis: true,
    cachePresences: false
})

const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./musicconfig/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;

const fs = require('fs');
const glob = require('glob')

require('./utils/MongoConnect.js')
require('./Structures/Message/QuoteMessage.js')
fs.readdir("./events/", (err, files) => {
  if(err)
      console.error(err);
  const eventsFiles = files.filter(file => file.split(".").pop() == "js");
  if(eventsFiles.length <= 0)
      return console.log(colors.brightBlue("[EVENTOS] - Não existem eventos para ser carregado"));
  console.log(colors.brightBlue("[EVENTOS] - Carregados os eventos"));
  eventsFiles.forEach((file, i) => {
      require("./events/" + file);
  });
});
client.commands = new Collection();
client.aliases = new Collection();


glob(__dirname+'/commands/*/*.js', function (er, files) {
    if(er) console.log(er)
    files.forEach(f => {
        let props = require(`${f.replace('.js', '')}`)
        client.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
        });
        })
    console.log("[COMANDOS] - Carregados com sucesso".brightBlue)
})

const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of player) {
    const event = require(`./player/${file}`)
    client.player.on(file.split(".")[0], event.bind(null, client));
}

module.exports = {
  client,
  config
}

client.login(config.bot.token);