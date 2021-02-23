const pid = require('pidusage')

exports.help = {
    name: 'playerdebug',
    aliases: [],
    status: 'on',
    onlydev: 'false',
    categoria: 'Música',
    permissões: [],
    permissõesbot: ['Enviar mensagens'],
    descrição: 'Bane um usuário de executar meus comandos',
    use: 'judyban [user]'
}

module.exports.run = async (client, message, args) => {
        let cpu = await pid(process.pid).then(s =>{return s.cpu.toFixed(2)+" %"})
        message.channel.send(`${client.emotes.info} - **${client.user.username}** está conectada em **${client.voice.connections.size}** canais !`);
    }