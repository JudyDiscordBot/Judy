const Discord = require('discord.js-light');
const {chooseerro} = require('../../functions/erro')

module.exports.run = async (client, message, args, fs) => {
  let choose = message.content.substring(8).split(',');
  let choice = (choose[Math.floor(Math.random() * choose.length)]);
  let chooseEmbed = new Discord.MessageEmbed()
  .setColor("#fffb44")
  .setDescription(`${message.author}, **Eu escolho:** \`${choice}\``)
  .setFooter(`Comando executado por ${message.author.tag}`)
  
  if (choose.length < 2) {
    message.quote(`**<:negado:755502002619940935> | ${message.author}** Eu preciso de duas palavras (separadas por vígula) para escolher` , chooseerro)
  } else {
    message.quote(`<:info:777359276988432394> | ${message.author} Você está usando um comando de \`Custom Message\` (que permite alterar a mensagem enviada pelo bot). Use com inteligência se digitar palavras feias os Dados Pessoais de outras pessoas vamos saber, e temos provas suficientes para sua conta ser suspensa. Obrigada. ` , {embed: chooseEmbed});
  }

}

exports.help = {
  name: 'choose',
  aliases: ['escolher'],
  status: 'on',
  onlydev: 'false'
}