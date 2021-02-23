exports.help = {
    name: 'filter',
    aliases: ['filtro'],
    status: 'on',
    onlydev: 'false',
    categoria: 'Música',
    permissões: [],
    permissõesbot: ['Enviar mensagens', 'Conectar-se ao canal de voz'],
    descrição: 'Adiciona um filtro a todas as músicas da fila',
    use: 'filter [filtro]'
}

module.exports.run = async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`**${client.emotes.error} Voce não está conectado a um canal de voz**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`**${client.emotes.error} Você não está conectado(a) no mesmo canal onde estou**`);

        if (!client.player.getQueue(message)) return message.channel.send(`**${client.emotes.error} - Nenhuma música está em reprodução.**`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Especifique um filtro válido para ativar ou desativar.`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`**${client.emotes.error} - O filtro escolhido não existe, tente outro, por exemplo **(8D, gate, haas, phaser, treble, tremolo, vibrato, reverse, karaoke, flanger, mcompand, pulsator, subboost, bassboost, vaporwave, nightcore, normalizer, surrounding)**.`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} Estou **adicionando** o filtro em sua música, aguarde...\n**\`[!] A música e pausada enquanto o filtro está sendo ativado.\`**`);
        else message.channel.send(`${client.emotes.music} Estou **removendo** o filtro de sua música, aguarde... **\`[!] A música e pausada enquanto o filtro está sendo desativado.\`**`);
};