module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Não a mais nada na fila, então irei parar e esperar você inserir mais músicas.`);
};