const { MessageEmbed } = require('discord.js')
module.exports.run = async (client, message, args) => {

    let user = message.mentions.users.first();
    try {

    if (!args.length) {
        user = message.author;
    } else {
        if (Number(args[0])) {
            user = await client.users.fetch(args[0]);
        }

        if (!user) {
            message.guild.members.cache.forEach(member => {
                if (member.displayName === args.join(' '))
                    user = member.user;
            });
        }

        if (!user) {
            message.guild.members.cache.forEach(member => {
                if (member.displayName.toLowerCase().startsWith(args.join(' ').toLowerCase())) {
                    user = member.user;
                }
            });
        }
    }

 } catch (err) {
    return message.quote('```js\n' + err + '```')
            }

let spotify = user.presence.activities
if (!spotify) return message.reply(`Esse usuário não está escutando uma música no spotify, ou não foi possível detectar.`)
let spy = user.presence.activities.find(spotify => spotify.name === "Spotify") || spotify.find(spotify => spotify.type === "LISTENING")
if (!spy) return message.quote(`Esse usuário não está escutando uma música no spotify, ou não foi possível detectar.`)
let spotifyImg = spy.assets.largeImageURL()
let spotifyUrl = `https://open.spotify.com/track/${spy.syncID}`
let spotifyName = spy.details
let spotifyAlbum = spy.assets.largeText
let spotifyAuthor = spy.state

let embed = new MessageEmbed()
    .setAuthor(`Spotify - ${user.tag}`, "https://cdn.discordapp.com/emojis/554334875411415107.png?v=1")
    .setThumbnail(`https://cdn.discordapp.com/emojis/554334875411415107.png?v=1`)
    .setImage(spotifyImg)
    .setFooter(spotifyAlbum, spotifyImg)
    .setColor(`#00ff00`)
    .addField("Nome da música", spotifyName)
    .addField("Artistas", spotifyAuthor)
    .addField("Album", spotifyAlbum)
    .addField("Link da música", spotifyUrl)

message.channel.send(embed)
}

exports.help = {
    name: 'spotify',
    aliases: ['spt'],
    status: "on",
    onlydev: 'false',
    categoria: 'Membros',
    permissões: [],
    permissõesbot: ['Enviar mensagens', 'Enviar Embeds e links'],
    descrição: 'Mostra com detalhes a música que você ou seu amigo está escutando',
    use: 'spotify <user>'
} 