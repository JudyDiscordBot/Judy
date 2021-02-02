    module.exports.run =  async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} Você não está conectado(a) a nenhum canal de voz.**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} Você não está conectado ao mesmo canal de voz**`);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} Não tem nenhuma música tocando.**`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`**${client.emotes.error} - Só há uma música na fila.**`);

        client.player.clearQueue(message);

        message.channel.send(`**${client.emotes.success} A playlist foi totalmente **limpa** e está pronta para inserir mais músicas.**`);
    }

    exports.help = {
        name: 'clear-queue',
        aliases: ['cq', 'limpar-queue', 'limpar'],
        status: 'on',
        onlydev: 'false'
    }