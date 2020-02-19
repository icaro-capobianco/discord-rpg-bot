import Command from "./Command";

export default class CommandList {

    data: Record<string, Command>
    helpMessage: string;

    constructor( commands: Array<Command> ) {
        let commandsObj: Record<string, Command> = {}
        commands.forEach((e: Command) => {
            commandsObj[e.name] = e
        })
        this.data = commandsObj

        this.helpMessage = commands.reduce(( a, e ) => {
            if(a === '')
                a = `here are some options you can try:`
            return `${a}\n**${e.name}:**\n${e.description}\n`
        }, '')
    }
    
}
