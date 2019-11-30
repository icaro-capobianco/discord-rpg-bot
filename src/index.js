const Discord = require('discord.js');
const { prefix, token } = require ( '../config.json' );
const client = new Discord.Client();

client.once('ready', () => {
})

client.on('message', message => {
    if( message.content.match( prefix + 'roll d[0-9]+' ) ) {
        console.log( message.content.split );
        var sides = message.content.split( 'd' )[1];
        console.log( sides );
        message.channel.send( Math.floor(Math.random() * sides) + 1 );
    }
})

client.login(token);