const {client, config} = require("../index")
const {MessageEmbed, WebhookClient} = require("discord.js-light");
const comando = new WebhookClient('799683143937818634', config.webhook.log)
const user = require('../mongodb/user.js');
client.cooldown = new Set()
const cooldowns = {}
const ms = require('ms');
const comandodb = require('../mongodb/cmd.js')
const termos = require('../mongodb/termos.js')

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;

let prefix = config.bot.prefix;

    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
      return  message.quote(`**Olá eu sou a Judy, meu prefixo *nesse servidor* é \`${prefix}\`, use \`${prefix}ajuda\` para ver meus comandos.**`)}

      termos.findOne({id:message.author.id}, (err, db) => {
        if(db) return;
        if(!db) {
          new termos({
            id:message.author.id,
          }).save().catch(console.error);
          const guideline = new MessageEmbed()
          .setTitle('Termos de uso da Judy')
          .setDescription(`**<:info:788143555931406336> Olá ${message.author}, seja bem vindo(a). Eu gostaria lhe informar algumas coisinhas antes de você começar a me utilizar: A partir do próximo comando que você executar, você automaticamente está concordando com os seguintes requsitos:**\n\n- Estamos observando todos os comandos que você executa\n- Os dados do servidor em que você executou algum comando são armazenados.\n- O seu ID, e a data do primeiro comando executado serão salvos em meu banco de dados.\n - Se você fizer algo de absurdo ou utilizar os recursos da Judy com objetivo de prejudicar outras pessoas, ou prejudicar o bot ou o desenvolvedor você será banido e não vamos remover o seu banimento, nem se você pagar.\n- Caso for banido por Raidar servidores de algum amigo meu, nem gaste seu tempo pedindo unban.\n\n- Fui desenvolvida em <:JavaScript:760148418286452756> [JavaScript](https://nodejs.org/en/) utilizando <:lunox_djs:760148013585793045> [Discord.js](https://discord.js.org/#/)`)
          .setColor(`#FFC4E7`)
          .setThumbnail(client.user.displayAvatarURL())
          .setFooter(`Copyright (c) 2021 Judy`)
         return message.quote(guideline)
        }
      })

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

   var argscm = message.content.substring(prefix.length).split(" ");
   let cmdcm = argscm.shift().toLowerCase();
   let commandcm = client.commands.get(cmdcm) || client.commands.get(client.aliases.get(cmdcm))

if(commandcm) {
if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
  lastCmd: null
}
let ultimoCmd = cooldowns[message.author.id].lastCmd 
let timeout = 5000
if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']


if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']

    message.channel.send(`**Por favor ${message.author}, espere **\`${time}\`** para executar outro comando**`).then(msg=> {
msg.delete({ timeout: 10000 });
    })
   return;
} else {
cooldowns[message.author.id].lastCmd = Date.now() 
}

   }


try {
   var args = message.content.substring(prefix.length).split(" ");
   let cmd = args.shift().toLowerCase();
   let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
   command.run(client, message, args, prefix)


   let argumentodb = message.content.substring(prefix.length).split(" ");

   if(!args[0]) {
     argumentodb = 'Não tem'
   }
   new comandodb({
    id:message.author.id,
    guild:message.guild.id,
    ping:client.ws.ping,
    date:new Date(),
    command:cmd,
    argumento:argumentodb
  }).save().catch(console.error);

   } catch (err) {
     return
   }

            var guild = message.guild;
            let embeddiretor = new MessageEmbed()
            .setTitle('Log de comandos!')
            .setThumbnail(message.guild.iconURL())
            .setDescription(`Executaram um comando, no servidor **${message.guild.name}**`)
            .addField('Dados do executor:', `ID: ${message.author.id}\nUsername: ${message.author.username}\nUser Tag: ${message.author.tag}`)
            .addField('Mensagem:', `${message.content}`)
            .addField('Dados do servidor:', `Membros: ${message.guild.memberCount}\nNome: ${message.guild.name}\nID do server: ${message.guild.id}`);
            comando.send(embeddiretor);
});