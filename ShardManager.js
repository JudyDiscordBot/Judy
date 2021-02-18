const config = require('./Structures/json/config.json')
const { ShardingManager } = require('discord.js')
const shard = new ShardingManager('./index.js', {
  token: config.bot.token,
  autoSpawn: true
});
   shard.spawn(2);
