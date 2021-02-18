module.exports = (client, message,track) => {
    message.channel.send(`${client.emotes.music} Reproduzindo **\`${track.title}\`** no canal **\`${message.member.voice.channel.name}\`**...`).then(msg=> {
        msg.delete({ timeout: 10000 })
    })
};