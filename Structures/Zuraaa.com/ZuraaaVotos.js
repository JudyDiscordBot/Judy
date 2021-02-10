const escapeRegex = (str) => str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

module.exports.verificaVotos = (message, callback) => {
    
    if(message.author.id == '742798447253651506' && message.channel.id == '739152801665646682'){
        try {

            const regx = new RegExp('(.+) \\(([0-9]+)\\) votou no bot `' + escapeRegex(message.client.user.tag) + '`');
            const match = regx.exec(message.content.trim());

            if(match && match[2]){

                const user = message.client.users.cache.find(user => user.id == match[2]);

                if(user) callback(user);
                
            }
        } catch(error){
            console.log(error);
        }
    }
}