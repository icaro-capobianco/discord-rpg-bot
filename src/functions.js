const MessageWrap = require('./models/MessageWrap');
const CommandLine = require('./commands/CommandLine');

function handleMessage(discordMessage) {
    console.log('Message being handled')
    let message = new MessageWrap(discordMessage)
    if( message.isCommand() ) {
        handleCommand(message)
    }
}

function handleCommand(message) {
    console.log('Command being handled')
    let command = new CommandLine(message)
    try {
        command.execute()
    } catch (error) {
        console.log('Error when executing CommandLine')
        message.reply(`${error.message}`)
    }
}

module.exports = { handleMessage, handleCommand };