const axios = require('axios') //npm i axios
const Discord = require('discord.js')
const URL = "https://djsdocs.sorta.moe/v2/embed?src=stable";
module.exports.run = async(client, message, args) => {
     args = args.splice(0).join(" ");
             if (!args[0]) return message.quote("Voce precisa escrever algo para pesquisar nas docs")
     const qParams = new URLSearchParams({ q: args });

     try {
     axios.get(URL + `&${qParams.toString()}`)
      .then(response => {
            message.quote({ embed: response.data })
      })
} catch {
      return message.quote(`Não encontrei nada, desculpe`)
}

};

exports.help = {
      name: 'discord.js',
      aliases: ['docs','documentação'],
      status: 'on',
      onlydev: 'false'
    }