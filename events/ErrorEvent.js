const {client} = require('../index.js')
const colors = require('colors')

client.on('error', (err) => {
console.log(colors.brightRed(err.message))
})

