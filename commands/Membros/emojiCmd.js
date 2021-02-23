const Discord = require('discord.js')
const { parse } = require('twemoji-parser')

module.exports.run = async (client, message, args, prefix) => {

    const erro = new Discord.MessageEmbed()
    .setAuthor(`Erro - Judy` , client.user.displayAvatarURL())
    .setDescription(`**<:correto:755501974425960548> Forma certa de Utilizar:\n\n\`${prefix}emoji [EMOJI]\`\n\n<a:config:777355009385693195>  Exemplo:\n\`${prefix}emoji ✨ \`**`)
    .setImage(`https://cdn.discordapp.com/attachments/767786504142585980/777214008809619497/unknown.png`)
    .setColor(`#FFC4E7`)
    .setFooter(`<> Argumento Opcional | [] Argumento obrigatório`)

   const emoji = args[0];
   if (!emoji) return message.quote(erro);

   let custom = Discord.Util.parseEmoji(emoji);

   if (custom.id) {
      const embed = new Discord.MessageEmbed()
         .setDescription(`[Clique aqui](https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}) para baixar o emoji`)
         .setColor("BLUE")
         .setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`);
      return message.quote(embed);
   } else {
      let parsed = parse(emoji, { assetType: "png" });
      if (!parsed[0]) return message.quote("Emoji inválido ou indisponível");
      const embed = new Discord.MessageEmbed()
         .setDescription(`[Clique aqui](${parsed[0].url}) para baixar o emoji`)
         .setColor("BLUE")
         .setImage(parsed[0].url);
      return message.quote(embed);
   }
}
exports.help = {
    name: 'emoji',
    aliases: [],
    status: "on",
    onlydev: 'false',
    categoria: 'Membros',
    permissões: [],
    permissõesbot: ['Enviar mensagens', 'Enviar Embeds e links'],
    descrição: 'Mostra um emoji para você',
    use: 'emoji [Emoji]'
}
