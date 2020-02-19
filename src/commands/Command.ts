import CommandList from './CommandList';

export default class Command {

    name: string
    callback: Function
    description: string
    children: CommandList | false

    constructor(name: string, callback: Function, description: string, children: Array<Command> = [] ) {
        this.callback = callback
        console.log( `Command ${name} instantiated` )
        this.name = name
        this.description = description
        // this.children = new CommandList( children )
        this.children = children.length > 0 ? new CommandList( children ) : false 
    }
}
