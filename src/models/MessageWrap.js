const { prefix } = require('../../config.json');

class MessageWrap {
    constructor(discordMessage) {
        this.discordMessage = discordMessage;
        this.lines = discordMessage.content.match(/[^\r\n]+/g);
        console.log(`Message has the lines ${this.lines}`);
    }
    isCommand() {
        if (this.discordMessage.content.match(`^${prefix}`) !== null) {
            console.log(`Message is a command`);
            return true;
        }
        else {
            console.log(`Message is not a command, missing ${prefix}`);
            return false;
        }
    }
    getCommands() {
        let commands = this.lines[0].match(/\S+/g);
        console.log(`Message contained the following commands (${commands.join(', ')})`);
        return commands;
    }
    getLines() {
        return this.lines;
    }
    reply( text ) {
        this.discordMessage.reply( text ).then( sent => {
            console.log( `Sent a reply to ${sent.author.username}` )
        } ).catch( err => {
            console.log( err )
        } )
    }
}

module.exports = MessageWrap;