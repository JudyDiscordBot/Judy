const {MessageEmbed} = require('discord.js-light')

module.exports.run = async (client, message, args) => {
  if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.quote("** Eu não tenho permissão de \`Gerenciar apelidos\`**")
  let name = args.slice(1).join(" ")
  const semperm = new MessageEmbed()
    .setTitle("Erro")
    .setDescription(`Parece que você não tem permissão para alterar os nicknames.`)
    .setColor('RED')
    .setFooter('Opan', message.author.displayAvatarURL())
  if(!message.member.permissions.has("MANAGE_NICKNAMES")) return message.quote(`Você não tem permissão de \`Gerenciar apelidos\``)

  if (!args[0])return message.quote(`Você precisa mencionar quem deseja mudar o nickname.`)
  const User = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  if (!User) return message.quote(quemmudar)
  if(!name){
    return message.quote(`Você precisa digitar qual nickname deseja setar`)
  }
  if (!User.manageable) return message.quote(`Não posso alterar apelido desse usuário.`)
  User.setNickname(name)
  message.quote('Sucesso !! Apelido alterado.')
}

exports.help = {
  name: 'nickname',
  aliases: ['rename','nick','renomear'],
  status: 'on',
  onlydev: 'false'
}