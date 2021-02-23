const jimp = require("jimp")
const cooldowns = {}
const ms = require("ms")
const config = require('../../index')
exports.run = async (client, message, args) => {

if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 15000
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']
 
if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
message.quote(`** ${config.emoji.não} | Por favor ${message.author}, espere **\`${time}\`** para fazer outra edição**`)
       return;
    } else {
cooldowns[message.author.id].lastCmd = Date.now() 
    }

        let img = jimp.read("https://cdn.discordapp.com/attachments/554048737648050179/610011657632219147/laranjo-meme-cke.jpg")
        if (!args[0]) return message.quote("Escreva algo para o laranjo falar.")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(685, 494)
                image.print(font, 20, 30, args.join(" "), 600)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.quote({files: [{ attachment: i, name: "laranjo.png"}]})
                })
            })
        })
    }

    exports.help = {
        name: 'laranjo',
        aliases: [],
        status: 'on',
        onlydev: 'false',
        categoria: 'Diversao',
        permissões: [],
        permissõesbot: ['Enviar mensagens', 'Enviar arquivos e imagens'],
        descrição: 'Faz uma edit do laranjo !!!',
        use: 'laranjo [texto]'
      }