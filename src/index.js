const Discord = require('discord.js');
const { token } = require ( '../config.json' );
const messageHandler = require('./MessageHandler');
const client = new Discord.Client()

client.once('ready', () => {
    console.log('I am online')
})

client.on('message', message => {
    console.log('Message received')
    messageHandler.handleMessage( message )
})

client.login(token);