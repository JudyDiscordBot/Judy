const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {
    const erro = new Discord.MessageEmbed()
    .setAuthor(`Erro - Judy` , client.user.displayAvatarURL())
    .setDescription(`**<:correto:755501974425960548> Forma certa de Utilizar:\n\n\`${prefix}emojify [TEXTO]\`\n\n<a:config:777355009385693195>  Exemplo:\n\`${prefix}emojify Roi\`**`)
    .setImage(`https://cdn.discordapp.com/attachments/767786504142585980/777219492685545482/unknown.png`)
    .setColor(`#FFC4E7`)
    .setFooter(`<> Argumento Opcional | [] Argumento obrigatório`)
   // eslint-disable-line no-unused-vars
 const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
 };

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

  if (args.length < 1) {
    message.quote(erro);
}

message.quote(`Mensagem enviada por: ${message.author}: ${args.join(' ').split('').map(c => mapping[c] || c).join('')}
`);

message.quote('Você está usando um comando de `Custom Message` (que permite alterar a mensagem enviada pelo bot). Use com inteligência se digitar palavras feias os Dados Pessoais de outras pessoas vamos saber, e temos provas suficientes para sua conta ser suspensa. Obrigada. ')
};
exports.help = {
    name: 'emojify',
    aliases: [],
    status: "on",
    onlydev: 'false',
    categoria: 'Membros',
    permissões: [],
    permissõesbot: ['Enviar mensagens', 'Enviar Embeds e links'],
    descrição: 'Tranforma o seu texto em emojis',
    use: 'emojify [Texto]'
}