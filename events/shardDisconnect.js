const { client, config } = require("../index");
const {WebhookClient } = require("discord.js")

client.on('shardDisconnect', (event, shardID) => {
    let hook = new WebhookClient('799668672104759396', config.webhook.shard)
    hook.send({
        "embed": 
          {
            "description": `Shard \`${shardID}\` se desconectou`,
            "color": 16762087,
            "author": {
              "name": "Tombo Triste"
            },
            "footer": {
              "text": `${client.user.tag} - (${client.user.id})`
            }
          }
      })
})