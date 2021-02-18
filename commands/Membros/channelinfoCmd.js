const Discord = require('discord.js');
const moment = require('moment')
module.exports.run = async (client, message, args) => {
  
let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name === args.join(" ")) || message.channel

		const embed = new Discord.MessageEmbed()
			.setTitle(`Informações do Canal`)
			.setColor(`#FFC4E7`)
			.addField("📝 Nome do canal" , `\`${channel.name}\`` , true)
			.addField("⚒️| Menção do canal", `\`${channel}\``, true)
			.addField("🆔 | ID do canal", `\`${channel.id}\``, true)
			.addField("🔞 | NSFW", `\`${channel.nsfw ? "🔞 Esse canal é NSFW" : "💕 Esse canal não é NSFW"}\``, true)
			.addField("📋 | Nome do servidor", `\`${channel.guild.name}\``, true)
			.addField("🧾 | Categoria:", `\`${channel.parent ? channel.parent.name : "Esse canal não está em uma categoria"}\``, true)
			.addField("⏰ | Canal criado em:", `\`${moment.utc(channel.createdAt).format("LLLL")}\``,true)
		message.channel.send(embed)
		
		}
		
	module.exports.help = {
    name: "channelinfo",
	aliases: ['channel'],
	status: 'on',
	onlydev: 'false'
}