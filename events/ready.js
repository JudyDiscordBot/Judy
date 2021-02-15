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
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
      type: "WATCHING"
    }), 1000 * 60); 

    const f = require("node-fetch")


    f(`https://zuraaa.com/api/bots/${client.user.id}`).then((zu) => zu.json()).then((zua) => {
    zura = zua

    client.channels.cache.get("810936129154187325").setName(`📝│Servidores: ${client.guilds.cache.size}`)
    client.channels.cache.get("810936211321257994").setName(`📝│Votos Zuraaa!: ${zura.votes.current}`)

  })
          console.log(colors.cyan(`[SHARD] - Conectado na conta: ${client.user.tag} com  ${client.guilds.cache.size} servidores e ${client.users.cache.size} usuários`))
    client.user
        .setStatus('online')
        .catch(console.error);

  });