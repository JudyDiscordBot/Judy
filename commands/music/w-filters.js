 module.exports.run =  async (client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - **Você não está em um canal de voz !**`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - **Você não está no mesmo canal de voz !**`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - **Nenhum música tocando atualmente !**`);

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
        });

        message.channel.send({
            embed: {
                color: 'ORANGE',
                fields: [
                    { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `Lista de todos os filtros ativados ou desativados.\n Utilize ${client.config.discord.prefix}filtro para adicionar um filtro para música atual.`,
            },
        });
};

exports.help = {
    name: 'w-filters',
    aliases: ['filters', 'filtros'],
    status: 'on',
    onlydev: 'false'
}