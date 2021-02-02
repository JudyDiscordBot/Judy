module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.info} - A música que você escolheu já acabou, estou me desconetando do canal de voz.`);
};