const Discord = require('discord.js');

const CommandsTree = [
    { name: 'character', slug: 'char', subs: [
        { name: 'create',    description: 'Example: \ngm! character create [character_name]\n[attribute_name]:[attribute_value]\n-----\ncheck your server sheet making channel for more info.' },
        { name: 'update',    description: 'Example: \ngm! character update [character_name]\n[attribute_name]:[attribute_value]\n-----\ncheck your server sheet making channel for more info.' },
        { name: 'addto',     description: 'Example: \ngm! character addto [character_name]\n[attribute_name]:[attribute_value]\n-----\nthis will result in a list of values. For example if your attribute is currency:1gp and you add currency:1sp you will have currency: 1gp, 1sp.' },
        { name: 'increment', description: 'Example: \ngm! character increment [character_name]\n[attribute_name]:[attribute_value]\n-----\nthis will only work to numeric values, it will increment the attibute by the desired amount, but only if the current attribute value is also numeric.' },
    ], vars: [ 'name' ] }
];

class CommandLine {
    constructor(message) {
        console.log('CommandLine loaded')
        this.message = message
        this.commands = message.getCommands()
    }
    getNthCommand(n) {
        if( typeof this.commands[n] !== 'undefined' && this.commands[n] && this.commands[n] !== '' ) {
            return this.commands[n]
        } else {
            return false
        }
    }

    readNthCommand(n) {
        console.log( `Reading command ${i}...` )

        let commandName = this.getNthCommand(i)
        if( ! commandName )
            return false

        console.log( `Reading command ${i}: ${commandName}` )

        nthCommand = CommandsTree.find( e => {
            e.name = commandName
        } )
        if( ! nthCommand ) {
            throw `${Discord.escapeMarkdown( nthCommand )} is not a valid command`
        }
        return nthCommands
    }

    execute() {
        console.log( 'Executing CommandLine' )

        let command
        for (let i=1;i<this.commands.length;i++) {
        }
        var i = 0
        do  {
            i++
            command = this.readNthCommand(i)
        } while ( typeof command.subs !== 'undefined' && command.subs.length > 0 );
        command.callback()
    }

    messageSubCommands( command ) {
        var reply = command.subs.reduce( ( a, e ) => {
            if( a === '' )
                a = `\nFor the command **${command.name}** try:`
            return `${a}\n**${e.name}:**\n${e.description}\n`
        }, '' )
        this.message.discordMessage.reply( reply ).then( sent => {
            console.log( `Sent a reply to ${sent.author.username}` )
        } ).catch( err => {
            console.log( err )
        } )
    }
}

module.exports = CommandLine;