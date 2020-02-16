const MessageWrap = require('./models/MessageWrap');

class MessageHandler {

    handleMessage( discordMessage ) {
        console.log( 'Message being handled' )
        var message = new MessageWrap( discordMessage )
        if( message.isCommand() ) {
            this.handleCommand( discordMessage );
        }
    }

}

module.exports = new MessageHandler();