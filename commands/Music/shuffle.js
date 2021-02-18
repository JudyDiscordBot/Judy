exports.help = {
    name: 'shuffle',
    aliases: ['sh', 'aleatório', 'random'],
    status: 'on',
    onlydev: 'false'
}

module.exports.run = async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - **você não está em um canal de voz !**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - **Você não está no mesmo canal de voz !**`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - **Nenhuma música tocando atualmente !**`);

        client.player.shuffle(message);

        return message.channel.send(`${client.emotes.success} - **Fila aleatória de **${client.player.getQueue(message).tracks.length}** música(s) !**`);
    }