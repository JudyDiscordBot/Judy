module.exports.run = async (client, message, args) => {
 const db = require('../../Structures/json/db.json')
if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.quote(
      "Você não tem permissão de `Gerenciar Mensagens`");

      if (!args[0]) return message.quote('Você precisa escrever algo para eu poder falar.')

 let sayMessage = args[0]

      if (message.content.toLowerCase().includes("cpf")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo esse CPF ai não ?`)
   }
   if (message.content.toLowerCase().includes("rg")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo esse RG ai não ?`)
   }
   if (message.content.toLowerCase().includes("raça")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }
   if (message.content.toLowerCase().includes("raca")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }

   if (message.content.toLowerCase().includes("idade")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }

   if (message.content.toLowerCase().includes("nacionalidade")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }

   if (message.content.toLowerCase().includes("Dados pessoais")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }

    if (message.content.toLowerCase().includes("pessoais")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }

if (message.content.toLowerCase().includes("cartão")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }

if (message.content.toLowerCase().includes("boleto")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }

   if (message.content.toLowerCase().includes("cheque")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }

 if (message.content.toLowerCase().includes("cheque")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }

   if (message.content.toLowerCase().includes("banco")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }

   if (message.content.toLowerCase().includes("ip")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }

   if (message.content.toLowerCase().includes("cep")) {
   return message.quote(`Qual foi zé ? Ta achando que eu não to vendo essas palhaçadas que você ta escrevendo não ?`)
   }

  message.delete({ reason: `Eu apaguei a mensagem do usuário ${message.author.tag} que dizia: ${sayMessage}` }).catch(O_o => {});
  message.channel.send(`${sayMessage}\n\n
<:cat_sad2:770321538284519484> Mensagem enviada por: ${message.author}.`);
message.quote('Você está usando um comando de `Custom Message` (que permite alterar a mensagem enviada pelo bot). Use com inteligência se digitar palavras feias os Dados Pessoais de outras pessoas vamos saber, e temos provas suficientes para sua conta ser suspensa. Obrigada. ')
};

exports.help = {
  name: 'say',
  aliases: ['falar'],
  status: 'on',
  onlydev: 'false'
}