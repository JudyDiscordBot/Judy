 module.exports.run =  async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} - Você não está conectado a um canal de voz**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} Você não está conectado(a) no mesmo canal onde estou**`);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} - Não tem nenhuma música tocando**`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                fields: [
                    { name: 'Canal', value: track.author, inline: true },
                    { name: 'Requesitado por:', value: track.requestedBy.username, inline: true },
                    { name: 'Dá playlist', value: track.fromPlaylist ? '[ATIVADO]' : '[DESATIVADO]', inline: true },

                    { name: 'Visualizações', value: track.views, inline: true },
                    { name: 'Duração', value: track.duration, inline: true },
                    { name: 'Filtros Ativados', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Modo de Repetição', value: client.player.getQueue(message).repeatMode ? '[ATIVADO]' : '[DESATIVADO]', inline: true },
                    { name: 'Pausa de Música', value: client.player.getQueue(message).paused ? '[ATIVADO]' : '[DESATIVADO]', inline: true },

                    { name: 'Barra de Progresso', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
};

exports.help = {
    name: 'nowplaying',
    aliases: ['np', 'tocando', 'reproduzindo'],
    status: 'on',
    onlydev: 'false'
}