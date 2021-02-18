exports.help = {
    name: 'skip',
    aliases: ['sk', 's', 'pular'],
    status: 'on',
    onlydev: 'false'
}

module.exports.run = async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - **Você não está em um canal de voz !**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - **Você não está na mesma sala de voz !**`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - **Nenhuma música tocando atualmente !**`);

        client.player.skip(message);

        message.channel.send(`${client.emotes.success} - **A música atual acaba de ser **pulada** !**`);
    }