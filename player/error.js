module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Não há música sendo reproduzida neste servidor.`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Você não está conectado a nenhum canal de voz`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Não consigo entrar no seu canal de voz, verifique minhas permissões e veja se estou com **\`Conectar\`** selecionado`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Algo deu extremamente errado... Erro: ${error}`);
    };
};
