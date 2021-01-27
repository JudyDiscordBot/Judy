const config = require("./Structures/json/config.json");
const colors = require("colors");
const {Client, Collection} = require("discord.js");
const client = new Client({ws: {intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_BANS', 'GUILD_EMOJIS',  'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES']}})
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

/*fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() == "js");
  if(arquivojs.length <= 0)
      return console.log(colors.brightBlue("[COMANDOS] - Não existem comandos para ser carregado"));
      console.log(colors.brightBlue(`[COMANDOS] - Comandos Carregados ✓`));
  arquivojs.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
}); */

glob(__dirname+'/commands/*/*.js', function (er, files) {
    if(er) console.log(er)
    files.forEach(f => {
        let props = require(`${f.replace('.js', '')}`)
        client.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
        });
        })
    console.log("[COMANDOS] - Carregados com sucesso".brightCyan)
})

module.exports = {
  client,
  config
}

client.login(config.bot.token);