const config = require('../Structures/json/config.json')
const colors = require('colors')
const {connect} = require("mongoose");
connect(config.connection.mongo, { 
    useNewUrlParser: true,
   useUnifiedTopology: true
}).then(function () { 
    console.log(colors.brightBlue('[MongoDB] - DataBase ligada.'));
})