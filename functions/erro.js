const {MessageEmbed} = require('discord.js-light')
const config = require('../Structures/json/config.json')
const {client} = require('../index')
const prefix = config.bot.prefix


const chooseerro = new MessageEmbed()
    .setAuthor(`Erro - Judy` , 'https://cdn.discordapp.com/avatars/757563141637799969/751bf51c055db4454b0a116508a01cdf.png?size=2048')
    .setDescription(`**<:correto:755501974425960548> Forma certa de Utilizar:\n\n\`${prefix}choose [Texto 1], [TEXTO 2]\`\n\n<a:config:777355009385693195> Exemplo:\n\`${prefix}choose Tomar banho, Programar, Comer\`\n\n:twisted_rightwards_arrows: Sinônimos:\n\`${prefix}escolher\`**`)
    .setImage(`https://cdn.discordapp.com/attachments/767786504142585980/776958239505907742/unknown.png`)
    .setColor(`#FFC4E7`)
    .setFooter(`<> Argumento Opcional | [] Argumento obrigatório`)

    const ballerro = new MessageEmbed()
    .setAuthor(`Erro - Judy` , 'https://cdn.discordapp.com/avatars/757563141637799969/751bf51c055db4454b0a116508a01cdf.png?size=2048')
    .setDescription(`**<:correto:755501974425960548> Forma certa de Utilizar:\n\n\`${prefix}8ball [PERGUNTA]\`\n\n<a:config:777355009385693195> Exemplo:\n\`${prefix}8ball Devo sair agora ?\`\n\n:twisted_rightwards_arrows: Sinônimos:\n\`${prefix}8b\`**`)
    .setImage(`https://cdn.discordapp.com/attachments/793820175060172840/800833139353583647/unknown.png`)
    .setColor(`#FFC4E7`)
    .setFooter(`<> Argumento Opcional | [] Argumento obrigatório`)

    const clearerro = new MessageEmbed()
    .setAuthor(`Erro - Judy` , 'https://cdn.discordapp.com/avatars/757563141637799969/751bf51c055db4454b0a116508a01cdf.png?size=2048')
    .setDescription(`**<:correto:755501974425960548> Forma certa de Utilizar:\n\n\`${prefix}clear [Numero de mensagens entre de 2 à 100]\`\n\nExemplo:\n\`${prefix}clear 10\`\n\n<a:config:777355009385693195> Permissões:\n\`Gerenciar Mensagens\`**`)
    .setImage(`https://cdn.discordapp.com/attachments/767786504142585980/776976450028175400/unknown.png`)
    .setColor(`#FFC4E7`)
    .setFooter(`<> Argumento Opcional | [] Argumento obrigatório`)



module.exports = {
    chooseerro,
    ballerro,
    clearerro
}