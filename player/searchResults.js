module.exports = async  (client, message, query, tracks) => {
    const tag = await client.users.fetch('664587741299998721').tag
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Resultado para: ${query}` },
            footer: { text: 'Feito por ${tag} - Judy' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};