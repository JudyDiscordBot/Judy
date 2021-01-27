const {client, config} = require("../index")
const Discord = require("discord.js");
const comando = new Discord.WebhookClient('799683143937818634', config.webhook.log)
const bldb = require("../mongodb/blacklist.js")
const p = require("../mongodb/prefix");
const user = require('../mongodb/user.js');

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;

  p.findOne({name: "prefix", preid: message.guild.id}).then(async res => {
    let prefix = res ? res.prefix : config.bot.prefix;
  if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
      return  message.quote(`**Olá eu sou a Judy, meu prefixo *nesse servidor* é \`${prefix}\`, use \`${prefix}ajuda\` para ver meus comandos.**`)}
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

  user.findOne({id:message.author.id}, (err, db) => {
    if(db) return;
    if(!db) {
      var date = new Date();
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
      var dia = date.toLocaleString('pt-Br', options)
      new user({
        id:message.author.id,
        date:dia
      }).save().catch(console.error);
      message.quote(`<a:danacomigo:760151015583514655> Olá ${message.author}, como você não tinha uma conta criada em meu sistema eu acabei de criar uma pra você, espero que você goste de mim e que aproveite meus sistemas !!!! Hoje é um dia incrível, irei registrar esse exato momento que nos conhecemos em meu banco de dados para podermos comemorar ano que vem !!! <a:super_happy:801534215467827271>`)
    }
  })

try {
   var args = message.content.substring(prefix.length).split(" ");
   let cmd = args.shift().toLowerCase();
   let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
   command.run(client, message, args, prefix)
   } catch (err) {
     console.log()
   }

            var guild = message.guild;
            let embeddiretor = new Discord.MessageEmbed()
            .setTitle('Log de comandos!')
            .setThumbnail(message.guild.iconURL())
            .setDescription(`Executaram um comando, no servidor **${message.guild.name}**`)
            .addField('Dados do executor:', `ID: ${message.author.id}\nUsername: ${message.author.username}\nUser Tag: ${message.author.tag}`)
            .addField('Mensagem:', `${message.content}`)
            .addField('Dados do servidor:', `Membros: ${message.guild.memberCount}\nNome: ${message.guild.name}\nID do server: ${message.guild.id}`);
            comando.send(embeddiretor);
  })
});