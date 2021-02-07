const {client, config} = require("../index")
const votosZuraaa = require('../Structures/Zuraaa.com/ZuraaaVotos.js')

client.on("message", async message => {

votosZuraaa.verificaVotos(message, function(user){

      const obrigado = new Discord.MessageEmbed()
      .setTitle('🎉 Obrigado pelo seu Voto!')
      .setDescription(`Obrigada por votar em mim, cada voto me ajuda a crescer!`)
      .setColor(config.color)
      user.send(obrigado);
   })
})