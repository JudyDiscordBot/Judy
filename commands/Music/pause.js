exports.help = {
    name: 'pause',
    aliases: ['pausar','aguardar'],
    status: 'on',
    onlydev: 'false'
    }

    module.exports.run = async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Você não está conectado a um canal de voz.`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} Você não está conectado(a) no mesmo canal onde estou**`);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} - Nenhuma música está em reprodução.**`);

        if (client.player.getQueue(message).paused) return message.channel.send(`**${client.emotes.error} A Música já está pausada.**`);

        client.player.pause(message);

        message.channel.send(`${client.emotes.success} - Música **${client.player.getQueue(message).playing.title}** pausada!`);
    }