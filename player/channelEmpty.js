module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - A música parou porque não vejo mais ninguém no canal de voz, então também irei sair.`);
};