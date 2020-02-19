import { Message } from 'discord.js';
import MessageWrap from './models/MessageWrap';
import CommandLine from './commands/CommandLine';

function handleMessage(discordMessage: Message) {
    console.log('Message being handled')
    let message = new MessageWrap(discordMessage)
    if( message.isCommand() ) {
        handleCommand(message)
    }
}

function handleCommand(message: MessageWrap) {
    console.log('Command being handled')
    let command = new CommandLine(message)
    try {
        command.execute()
    } catch (error) {
        console.log('Error when executing CommandLine')
        message.reply(`${error.message}`)
    }
}

export { handleMessage, handleCommand }
