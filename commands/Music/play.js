exports.help = {
    name: 'play',
    aliases: ['p', 'tocar'],
    status: 'on',
    onlydev: 'false',
    categoria: 'Música',
        permissões: [],
    permissõesbot: ['Enviar mensagens', 'Conectar-se ao canal de voz'],
    descrição: 'Adiciona uma música à fila',
    use: 'play [música]'
}

module.exports.run = async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} Você não está conectado a um canal de voz**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Você não está no mesmo canal de voz !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Por favor insira o título da música`);

        client.player.play(message, args.join(" "), { firstResult: true });
    }