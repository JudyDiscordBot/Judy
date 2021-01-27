const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
const db = require('../../Structures/json/db.json')
    const admins = db.developer

     if(!db.developer.includes(message.author.id)) return message.quote('**<:negado:755502002619940935> Apenas desenvolvedores do bot podem utilizar este comando!**')
     message.quote(`<:correto:755501974425960548> | Ok, ${message.author}, Vou reiniciar....`);
     message.quote(`
<:pasta:757979518043684865> | A fechar pastas...`)
setTimeout(() => {
    message.quote(`<:correto:755501974425960548> Concluido !!!`)
        }, 5000);

        setTimeout(() => {
            process.exit(0);
            message.quote(`<:correto:755501974425960548> Concluido !!!`)
        }, 5000); 
    }

    exports.help = {
        name: 'reiniciar',
        aliases: ['r'],
        status: 'on',
        onlydev: 'true'
      }