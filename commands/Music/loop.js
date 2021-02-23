exports.help = {
    name: 'loop',
    aliases: ['lp', 'repeat', 'repetir', 're'],
    status: 'on',
    onlydev: 'false',
    categoria: 'Música',
    permissões: [],
    permissõesbot: ['Enviar mensagens', 'Conectar-se ao canal de voz'],
    descrição: 'Repete indefinidamente a música atual',
    use: 'loop'
}

module.exports.run = async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} Você não está conectado(a) a nenhum canal de voz.**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} Você não está conectado(a) no mesmo canal de voz onde estou.**`);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} Não tem nenhuma música tocando.**`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - Modo de Repetição **[DESATIVADO]**`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - Modo de Repetição **[ATIVADO]**︱**[!] Toda a fila será repetida indefinidamente.**`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} - Modo de Repetição **[DESATIVADO]**.`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - Modo de Repetição **[ATIVADO]**︱**[!] A música atual será repetida indefinidamente.**`);
            };
        };
};