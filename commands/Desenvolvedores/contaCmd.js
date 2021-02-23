const Discord = require('discord.js');
const config = require('../../Structures/json/config.json')
const db = require("../../mongodb/user.js");

module.exports.run = (client, message, args) => {
  
    db.findOne({id:message.author.id}, (err, conta) => {
        if(conta) {
            return message.quote(`${message.author} Sua conta foi criada na ${conta.date}`)
        } else {
            return message.quote('Não encontrei sua conta')
        }
        })
}

exports.help = {
    name: 'conta',
    aliases: [],
    status: 'on',
    onlydev: 'false',
    categoria: 'Desenvolvedor',
    permissões: [],
    permissõesbot: ['Enviar mensagens'],
    descrição: 'Veja a data de criação da sua conta em meu banco de dados',
    use: 'conta'
}