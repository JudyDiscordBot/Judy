const {MessageAttachment} = require('discord.js-light');
const {config} = require('../../index')
const fetch = require('node-fetch');

module.exports.run = async (client, message, args, prefix) => {
  

        if (!args[0]) return message.quote(`${configemoji.nao} | ${message.author}, Insira um texto junto com o comando`);
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`));
            let json = await res.json();
            let attachment = new MessageAttachment(json.message, "changemymind.png");
            message.quote(attachment);
}

exports.help = {
    name: "changemymind",
    aliases: ['cmm'],
    status: 'on'
}