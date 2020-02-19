import CommandList from './CommandList';

export default class Command {

    name: string
    description: string
    children: CommandList

    constructor(name: string, description: string, children = []) {
        console.log( `Command ${name} instantiated` )
        this.name = name,
        this.description = description,
        this.children = new CommandList( children )
    }
}
