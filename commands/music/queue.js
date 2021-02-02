module.exports.run =  async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está em um canal de voz !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz !`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nenhuma música tocando no momento !`);

        message.channel.send(`**Fila do servidor - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(looped)' : ''}**\nAtual : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (solicitado por: ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `e **${queue.tracks.length - 5}** outras músicas...` : `Na playlist **${queue.tracks.length}** música(s)...`}`));
};

exports.help = {
    name: 'queue',
    aliases: ['lista', 'playlist'],
    status: 'on',
    onlydev: 'false'
}