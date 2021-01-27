const escapeRegex = (str) => str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

module.exports.verificaVotos = (message, callback) => {
    
    if(message.author.id == '745828915993640980' && message.channel.id == '537433191393525760'){
        try {

            const regx = new RegExp('(.+) \\(([0-9]+)\\) votou no bot `' + escapeRegex(message.client.user.tag) + '`');
            const match = regx.exec(message.content.trim());

            if(match && match[2]){

                const user = message.client.users.cache.find(user => user.id == match[2]);

                if(user) callback(user);
                
            }
        }catch(error){
            console.log(error);
        }
    }
}