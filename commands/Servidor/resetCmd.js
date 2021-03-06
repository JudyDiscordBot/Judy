const messagelog = require('../../mongodb/messagelog.js')
const serverlog = require('../../mongodb/serverlog')
const ch = require('../../mongodb/channelcmd.js')
module.exports.run = async (bot, message, args, prefix) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) {
  return message.quote('❌ Você precisa de permissão de ADMINISTRADOR para ultilizar este comando')
  }

  if(!args[0]) {
  
  message.quote(`**Resete algum sistema do Banco de Dados.\n\nUse esse comando para remover os canais de logs ou comandos !!!\n\ \`${prefix}resetar messagelog\` - Resete o canal de logs de mensagens do servidor\n\`${prefix}resetar serverlog\` - Resete o canal de logs de atualizações do servidor\n\`${prefix}resetar channelcommand\` - Resete o canal de comandos do servidor**`)
  } else
    switch(args[0]) {
      case 'messagelog':
        messagelog.deleteOne({ GuildID: message.guild.id }, (err) => console.log(err))
        message.quote(`O canal de logs de mensagens foi resetado com sucesso.`)
        break;
      case 'serverlog':
      serverlog.deleteOne({ GuildID: message.guild.id }, (err) => console.log(err))
      message.quote(`O canal de atualizações do servidor foi resetado com sucesso.`)
      break;
      case 'channelcommand':
      ch.deleteOne({guild:message.guild.id }, (err) => console.log(err))
      message.quote(`O canal de comandos foi resetado com sucesso.`)
    }
}
exports.help = {
    name: 'reset',
    aliases: ['resetar'],
    status: 'on',
    onlydev: 'false',
    categoria: 'Servidor',
    permissões: ['Administrador'],
    permissõesbot: ['Enviar mensagens', 'Administrador'],
    descrição: 'Reseta algum dado do meu banco de dados',
    use: 'resetar [dado que você quer remover]'
}