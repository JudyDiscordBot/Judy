const { client, config } = require("../index");
const {WebhookClient} = require("discord.js")


client.on('shardReconnecting', id => {
    let hook = new WebhookClient(`799668672104759396`, config.webhook.shard)
    hook.send({
        "embed": {
            "description": `Shard \`${id}\` se reconectou`,
            "color": 16762087,
            "author": {
              "name": "Voltei animada !!!"
            },
            "footer": {
              "text": `${client.user.tag} - (${client.user.id})`
            }
          }
      })
})