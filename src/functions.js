const MessageWrap = require('./models/MessageWrap');
const Command = require('./models/Comand');

function handleMessage( discordMessage ) {
    console.log( 'Message being handled' )
    let message = new MessageWrap( discordMessage )
    if( message.isCommand() ) {
        this.handleCommand( message )
    }
}

function handleCommand( message ) {
    let command = new Command( message )
}

module.exports = { handleMessage, handleCommand };