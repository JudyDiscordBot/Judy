const config = require('../../Structures/json/config.json')
const {ballerro} = require('../../functions/erro')
module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.quote(ballerro)

    var eightball = [ 
        "Sim",
        "Não",
        "Talvez",
        "Provavelmente",
        "Acho que não",
        "Nunca",
        "Você pode tentar...",
        "Você Decide!",
        "Sem Sombra de duvidas!",
        "Não pergunte isto agora",
        "Pergunte a meu patrão",
        "Não é da sua conta",
        "Tu que deixa"
]
message.quote(`**${config.emoji.sim} | ${message.author} A resposta é \`${eightball[Math.floor(Math.random() * eightball.length)]}\`**`)
}

module.exports.help = {
    name: "8ball",
    aliases: ['8b'],
    status: 'on',
    onlydev: 'false'
}