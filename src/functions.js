const MessageWrap = require('./models/MessageWrap');
const CommandLine = require('./models/CommandLine');

function handleMessage( discordMessage ) {
    console.log( 'Message being handled' )
    let message = new MessageWrap( discordMessage )
    if( message.isCommand() ) {
        handleCommand( message )
    }
}

function handleCommand( message ) {
    console.log( 'Command being handled' )
    let command = new CommandLine( message )
    try {
        command.execute()
    } catch (error) {
        message.reply( error )
    }
}

module.exports = { handleMessage, handleCommand };