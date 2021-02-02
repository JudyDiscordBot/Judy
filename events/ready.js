const {client, config} = require('../index')

client.on("ready", async () => {
 
  const totalUsers = client.users.cache.size
  const totalGuilds = client.guilds.cache.size

    let activities = [
        `Utilize ${config.bot.prefix}help para obter ajuda`,
        `${totalGuilds} servidores!`,
        `${totalUsers} usuários! 😎 `
      ],
      i = 0;
    const colors = require('colors')
    client.user.setActivity(`${activities[i++ % activities.length]}`)
    console.log(colors.cyan(`[SHARD] - Conectado na conta: ${client.user.tag} com  ${client.guilds.cache.size} servidores e ${client.users.cache.size} usuários`))
    client.user
        .setStatus('online')
        .catch(console.error);

  });