const Discord = require('discord.js');
const { token } = require ( '../config.json' );
const { handleMessage, handleCommand } = require('./functions');
const client = new Discord.Client()

client.once('ready', () => {
    console.log('I am online')
})

client.on('message', message => {
    console.log('Message received')
    handleMessage( message )
})

client.login(token);