import { Message } from 'discord.js';
import { prefix } from '../../config.json';

export class MessageWrap {

    discordMessage: Message
    lines: Array<string>

    constructor(discordMessage: Message) {
        this.discordMessage = discordMessage
        this.lines = discordMessage.content.match(/[^\r\n]+/g) || []
        console.log(`Message has the lines ${this.lines}`)
    }
    isCommand() {
        if (this.discordMessage.content.match(`^${prefix}`) !== null) {
            console.log(`Message is a command`)
            return true
        } else {
            console.log(`Message is not a command, missing ${prefix}`)
            return false
        }
    }
    getCommands() {
        let commands = this.lines.length > 0 ? ( this.lines[0].match(/\S+/g) || [] ) : []
        console.log(`Message contained the following commands (${commands.join(', ')})`)
        return commands
    }
    getLines() {
        return this.lines
    }
    reply( text: string ) {
        this.discordMessage.reply( text ).then( sent => {
            console.log( `Sent a reply to ${sent.author.username}` )
        } ).catch( err => {
            console.log( err )
        } )
        console.log( `Sending a reply to ${this.discordMessage.author.username} saying: ${text}` )
    }
}
