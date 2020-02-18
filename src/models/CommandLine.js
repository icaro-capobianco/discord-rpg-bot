const Discord = require('discord.js');

const CommandsTree = [
    { name: 'character', slug: 'char', children: [
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

    getCommand(commandName) {
        let command = CommandsTree.find( e => {
            return e.name === commandName
        } )
        if( ! command ) {
            throw `${commandName} is not a valid command`
        }
        return command;
    }

    execute() {
        console.log('Reading CommandLine')
        let commandName = this.commands[1] || false;
        if( ! commandName ) {
            return this.messageCommands(CommandsTree)
        }
        console.log(`First command is: ${commandName}`)

        let command = this.getCommand(commandName)

        this.executeCommand(command, this.commands.splice(2))
    }

    executeCommand(command, parameters) {
        console.log(`Reading command ${command.name}`)
        if( command.children ) {

            console.log(`Command ${command.name} has children`)
            var childName = parameters[0] || false
            if( ! childName ) {
                return this.messageCommands(command.children)
            }
            console.log(`Child command name: ${childName}`)

            var childCommand = this.getCommand(childName)

            this.executeCommand(childCommand, parameters.splice(1))

        } else {
            console.log(`Executing command ${command.name}`)
            command.callback()
        }
    }

    messageCommands(commands) {
        var reply = commands.reduce( ( a, e ) => {
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