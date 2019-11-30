const Message = require('../models/discord/messages/Message');

class MessageHandler {

    handleMessage( message ) {
        var message = new Message( message )
        if( message.isBotMessage() ) {
            console.log( message.getLines() )
        }
    }

}

module.exports = new MessageHandler();