exports.help = {
    name: 'stop',
    aliases: ['dc', 'sair', 'desconectar', 'parar'],
    status: 'on',
    onlydev: 'false',
    categoria: 'Música',
    permissões: [],
    permissõesbot: ['Enviar mensagens'],
    descrição: 'Para a música e desconecta o bot do canal',
    use: 'stop'
}

module.exports.run = async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - **Você não está em um canal de voz !**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - **Você não está no mesmo canal de voz !**`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - **Nenhuma música tocando atualmente !**`);

        client.player.setRepeatMode(message, false);
        client.player.stop(message);

        message.channel.send(`${client.emotes.success} - A Música foi parada`);
}