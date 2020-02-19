const Discord = require('discord.js');
const CommandsTree = require( './CommandTree' )

class CommandLine {

    constructor(message) {
        console.log('CommandLine loaded')
        this.message = message
        this.commands = message.getCommands()
    }

    findCommand(commandName) {
        console.log(`Finding command ${commandName} in CommandsTree`)
        let command = CommandsTree[commandName] || false
        if(! command) {
            throw new Error( `${commandName} is not a valid command` )
        }
        return command
    }

    execute() {
        console.log('Reading CommandLine')
        let commandName = this.commands[1] || false;
        if(! commandName) {
            return this.messageCommands(CommandsTree)
        }
        console.log(`First command is: ${commandName}`)

        let command = this.findCommand(commandName)

        this.executeCommand(command, this.commands.splice(2))
    }

    executeCommand(command, parameters) {
        console.log(`Reading command ${command.name}`)
        if(command.children) {

            console.log(`Command ${command.name} has children`)
            var childName = parameters[0] || false
            if( ! childName ) {
                return this.messageCommands(command.children)
            }
            console.log(`Child command name: ${childName}`)

            var childCommand = this.findCommand(childName)

            this.executeCommand(childCommand, parameters.splice(1))

        } else {
            console.log(`Executing command ${command.name}`)
            command.callback()
        }
    }

    messageCommands(commandList) {
        console.log(`Listing commands of commandList: ${commandList.message}`)
        this.message.reply(commandList.message)
    }
    
}

module.exports = CommandLine;