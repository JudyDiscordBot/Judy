module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - **\`${playlist.title}\`** foi adicionado a fila, agora tenho total de **${playlist.tracks.length}** música(s).`);
};