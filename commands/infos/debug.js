module.exports.run = async(client, message, args) => {
        message.channel.send(`${client.emotes.info} - **${client.user.username}** está conectada em **${client.voice.connections.size}** canais !`);
    
};

exports.help = {
    name: 'playerdebug',
    aliases: [],
    status: 'on',
    onlydev: 'false'
}