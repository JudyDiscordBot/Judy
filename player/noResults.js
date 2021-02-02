module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Nenhum resultado encontrado no YouTube para **\`${query}\`**.`);
};