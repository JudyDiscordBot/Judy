const Discord = require('discord.js');
const mongoose = require("mongoose");
const config = require('../../Structures/json/config.json')
const dbUrl = config.connection.mongo;

mongoose.connect(dbUrl, {
    useNewUrlParser: true
});
const perfil = require("../../mongodb/perfil.js");
/*
module.exports.run = async (client, message, args, prefix) => {

    let user = message.mentions.users.first();
    try {

    if (!args.length) {
        user = message.author;
    } else {
        if (Number(args[0])) {
             user = await client.users.fetch(args[0]);
        }

        if (!user) {
            message.guild.members.cache.forEach(member => {
                if (member.displayName === args.join(' '))
                    user = member.user;
            });
        }

        if (!user) {
            message.guild.members.cache.forEach(member => {
                if (member.displayName.toLowerCase().startsWith(args.join(' ').toLowerCase())) {
                    user = member.user;
                }
            });
        }
    }

 } catch (err) {
    message.quote('```js\n' + err + '```')
            }

           perfil.findOne({
            userID: user.id
        }, async (err, money) => {
            if(err) console.log(err);
            if(!money) {
                const newMoney = new perfil({
                    userID: user.id,
                    bio: `Eu amo a Judy !`
                });

                await newMoney.save().catch(e => console.log(e));
            } else if(money) {
                money.bio = money.bio;
                await money.save().catch(e => console.log(e));
            }
        });

        perfil.findOne({
          userID: user.id
      }, async (err, perfil) => {
          if(err) console.log(err);
        const diario = new Discord.MessageEmbed()
        .setTitle(`Perfil de ${user.tag}`)
        .setThumbnail(user.displayAvatarURL({dynamic : true}) || 'https://cdn.discordapp.com/embed/avatars/0.png')
        .addField(`Sobre mim:`, `${perfil.bio}`)
        .setColor('00FF7F')

        if(perfil.image){
            diario.setImage(perfil.image)
        }
        message.quote(diario);
        })


    }*/

exports.help = {
    name: 'perfil',
    aliases: ['daily'],
    status: 'off',
    onlydev: 'false'
}