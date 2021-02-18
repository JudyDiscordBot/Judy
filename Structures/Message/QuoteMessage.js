const { APIMessage, Message } = require('discord.js');

Message.prototype.quote = async function (content, options) {
  const reference = {
    message_id: (
      !!content && !options
        ? typeof content === 'object' && content.messageID
        : options && options.messageID
    ) || this.id,
    message_channel: this.channel.id
  }

  const { data: parsed, files } = await APIMessage
    .create(this, content, options)
    .resolveData()
    .resolveFiles()

  this.client.api.channels[this.channel.id].messages.post({
    data: { ...parsed, message_reference: reference },
    files
  })
}