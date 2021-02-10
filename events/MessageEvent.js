const {client} = require("../index")
const {MessageEmbed} = require("discord.js");
const votosZuraaa = require('../utils/votosZuraaa.js');


  client.on('message', message => {
    
    votosZuraaa.verificaVotos(message, function(user){
      // Embed do user
        const obrigado = new MessageEmbed()
        .setTitle('🎉 Obrigado pelo seu Voto!')
        .setDescription(`Obrigada por votar em mim, cada voto me ajuda a crescer!\nVote novamente amanhã.`)
        .setColor('#FFC4E7')
        user.send(obrigado);
      // Fim
        });
    });