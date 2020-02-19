import Discord, { Message } from 'discord.js';
import { token } from '../config.json';
import { handleMessage, handleCommand } from './functions.js';
const client = new Discord.Client()

client.once('ready', () => {
    console.log('I am online')
})

client.on('message', (message: Message) => {
    console.log('Message received')
    handleMessage( message )
})

client.login(token);