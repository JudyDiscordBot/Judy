
    module.exports.run =  async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - **Você não está em um canal de voz !**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - **Você não está no mesmo canal de voz !**`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - **Nenhuma música tocando atualmente !**`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - **Porfavor insira um número válido !**`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 250) return message.channel.send(`${client.emotes.error} - **Porfavor insira um número válido (entre 1 e 250) !**`);

        client.player.setVolume(message, parseInt(args[0]));

        message.channel.send(`${client.emotes.success} - **Volume definido para **${parseInt(args[0])}%** !**`);
    }
    
    exports.help = {
        name: 'volume',
        aliases: [],
        status: 'on',
        onlydev: 'false'
    }