const colors = require('colors');
const { color } = require('jimp');
const fs = require('fs');
exports.run = (client, message, args, firebaseDB) => {
    let user = message.author;
    const db = require('../../Structures/json/db.json')
    const admins = db.developer


     if(!db.developer.includes(message.author.id)) return message.quote('**<:negado:755502002619940935> Apenas desenvolvedores do bot podem utilizar este comando!**')

     fs.readdir("../events/", (err, files) => {
      if(err)
          console.error(err);
      const eventsFiles = files.filter(file => file.split(".").pop() == "js");
      if(eventsFiles.length <= 0)
          return console.warn("Não existem eventos para ser carregado");
      console.log(colors.cyan(" [EVENTOS] - Carregado: " + eventsFiles.length));
      eventsFiles.forEach((file, i) => {
          require("../events/" + file);
          console.log(colors.cyan(` [EVENTOS] - ${i + 1}: ${file} carregado.`));
      });
    });
    
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    
    
    fs.readdir("./comandos/", (err, files) => {
      if (err) console.error(err);
    
      let arquivojs = files.filter(f => f.split(".").pop() == "js");
      arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(colors.brightBlue(`[COMANDOS] - ${f} ✓`));
        client.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
          client.aliases.set(alias, props.help.name);
        });
      });
    });

  }

  exports.help = {
    name: 'reload',
    aliases: [],
    status: 'off',
    onlydev: 'true'
  }
