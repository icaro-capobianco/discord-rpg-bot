const Discord = require('discord.js');
const { token } = require ( '../config.json' );
const messageHandler = require('./includes/MessageHandler');
const client = new Discord.Client();

client.once('ready', () => {
})

client.on('message', message => {
    messageHandler.handleMessage( message )
})

client.login(token);