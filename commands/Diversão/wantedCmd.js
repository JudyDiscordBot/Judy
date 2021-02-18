const Discord = require('discord.js');
const Jimp = require("jimp");

module.exports.run = (bot, message, args) =>
{
    let GuildMember = message.mentions.members.first();

    if(!GuildMember)
    {
        return message.quote(":no_entry: Mencione um usuário valido :no_entry:");
    }

    message.channel.startTyping();

    let i1 = Jimp.read(GuildMember.user.displayAvatarURL({ format: "png", size: 2048 }));
    let i2 = Jimp.read("https://cdn.discordapp.com/attachments/767786504142585980/806365351302529054/aranuyr.png");

    Promise.all([i1, i2]).then((images) =>
    {
        images[0].resize(450, 442).quality(100);
        images[1].composite(images[0], 140, 354).quality(100).getBuffer(Jimp.MIME_PNG, (err, buffer) =>
        {
            if(err)
            {
                console.log("\x1b[31m*\x1b[0m Error creating \x1b[33m(Most Wanted)\x1b[0m meme: \x1b[31m" + err + "\x1b[0m");
            }

            message.reply(new Discord.MessageAttachment(buffer, "wanted.png")).then(() => message.channel.stopTyping(true)).catch(() => message.channel.stopTyping(true));
        });
    });
};
exports.help = {
    name: 'wanted',
    aliases: ['procurado'],
    status: 'on',
    onlydev: 'false'
}