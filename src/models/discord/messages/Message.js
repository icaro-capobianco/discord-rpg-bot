const { prefix } = require ( '../../../../config.json' );

class Message {

    constructor( message ) {
        this.message = message;
        this.content = message.content;
    }

    isBotMessage() {
        return this.content.match( `^${prefix}` ) !== null
    }

    handleLines( callback ) {
        this.getLines().forEach( line => {
            if( line ) {
                callback( line )
            }
        } );
    }

    getLines() {
        return this.content.match(/[^\r\n]+/g);
    }

}

module.exports = Message;