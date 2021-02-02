module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel', 'cancelar') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - A seleção de música foi **cancelada**.`);
    } else message.channel.send(`${client.emotes.error} - Você deve enviar um número válido entre **1** e **${tracks.length}**.`);
};