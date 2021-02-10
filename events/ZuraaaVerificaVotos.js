const {client, config} = require("../index")
const votosZuraaa = require('../Structures/Zuraaa.com/ZuraaaVotos.js')
const voto = require('../mongodb/voto.js')
const {MessageEmbed} = require('discord.js');
const voto = require("../mongodb/voto.js");

client.on("message", async message => {

votosZuraaa.verificaVotos(message, function(user) {

   voto.findOne({_id:user.id}, async (err, sim) => {
     if(!sim) {
      const now = new Date()
      now.setHours(now.getHours() + 8); 
      const newvote = now; 
      let cu = newvote

      console.log(`[ZURAAA ! ] O usuário ${user.tag} votou, mas somente poderá votar nomemente em ${cu}`)
      
      new voto({
         _id:user.id,
         newvote:cu
       }).save().catch(console.error);

     } else {
      voto.findOneAndDelete({_id:user.id}, async (e, db) => {

      if(db) {
        console.log(`[ZURAAA ! ] O usuário ${user.tag} votou.`)
      }

      if(!db) {
        console.log(`[ZURAAA !] Deletado com sucesso`)

        new voto({
          _id:user.id,
          newvote:cu
        }).save().catch(console.error);
      }

      })
     }
     
    })

      const obrigado = new MessageEmbed()
      .setTitle('🎉 Obrigado pelo seu Voto!')
      .setDescription(`Obrigada por votar em mim !!!!!\nVote novamente amanhã clicando [aqui](https://www.zuraaa.com/bots/757563141637799969/votar)`)
      user.send(obrigado);

    })
});
