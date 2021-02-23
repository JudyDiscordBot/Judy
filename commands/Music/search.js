exports.help = {
    name: 'search',
    aliases: ['sr', 'procurar'],
    status: 'on',
    onlydev: 'false',
    categoria: 'Música',
    permissões: [],
    permissõesbot: ['Enviar mensagens', 'Conectar-se ao canal de voz'],
    descrição: 'Pesquisa uma música e adiciona ela na fila',
    use: 'procurar [música]'
}

module.exports.run = async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - **Você não está em um canal de voz !**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - **Você não está no mesmo canal de voz !**`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - **Porfavor mencione o tétulo da música !**`);

        client.player.play(message, args.join(" "));
    }