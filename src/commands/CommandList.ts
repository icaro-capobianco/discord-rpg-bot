import Command from "./Command";

export default class CommandList {

    [key: string]: Command | string;
    message: string;

    constructor( commands: Array<Command> ) {
        commands.forEach((e: Command) => {
            this[e.name] = e
        })
        this.message = commands.reduce(( a, e ) => {
            if(a === '')
                a = `here are some options you can try:`
            return `${a}\n**${e.name}:**\n${e.description}\n`
        }, '')
    }
    
}
