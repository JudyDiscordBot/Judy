module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} Música **\`${track.title}\`** adicionada a fila`);
};