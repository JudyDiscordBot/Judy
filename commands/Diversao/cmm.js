const {MessageAttachment} = require('discord.js');
const {config} = require('../../index')
const fetch = require('node-fetch');

module.exports.run = async (client, message, args, prefix) => {
 
       let text = args[0]

        if (!args[0]) return message.quote(`${config.emoji.nao} | ${message.author}, Insira um texto junto com o comando`);
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`));
            let json = await res.json();
            let attachment = new MessageAttachment(json.message, "changemymind.png");
            message.quote(attachment);
}

exports.help = {
    name: "changemymind",
    aliases: ['cmm'],
    status: 'on',
    categoria: 'Diversao',
    permissões: [],
    permissõesbot: ['Enviar mensagens', 'Enviar arquivos e imagens'],
    descrição: 'Change My Mind bro !!!!! ',
    use: 'cmm [user]'
}