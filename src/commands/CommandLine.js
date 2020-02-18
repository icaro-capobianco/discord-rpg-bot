const Discord = require('discord.js');
const CommandsTree = require( './CommandTree' )

class CommandLine {

    constructor(message) {
        console.log('CommandLine loaded')
        this.message = message
        this.commands = message.getCommands()
    }

    findCommand(commandName) {
        let command = CommandsTree[commandName]
        if(! command) {
            throw new `${commandName} is not a valid command`
        }
        return command;
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

    messageCommands(commands) {
        var reply = commands.reduce(( a, e ) => {
            if(a === '')
                a = `here are some options you can try:`
            return `${a}\n**${e.name}:**\n${e.description}\n`
        }, '')

        this.message.discordMessage.reply(reply).then(sent => {
            console.log(`Sent a reply to ${sent.author.username}`)
        }).catch( err => {
            console.log(err)
        })
    }
    
}

module.exports = CommandLine;