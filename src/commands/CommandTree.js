
class Command {
    constructor(name, description, children = []) {
        console.log( `Command ${name} instantiated` )
        this.name = name,
        this.description = description,
        this.children = {},
        console.log( `Command ${name} has ${children.length} childrens` )
        children.forEach(e => {
            this.children[e.name] = e
        })
        this.children.message = children ? reduceCommandListMessage( children ) : description;
        console.log( `Command ${name} has reply ${this.reply}` )
    }
}

function reduceCommandListMessage(commandList) {
    return Object.values(commandList).reduce(( a, e ) => {
        if(a === '')
            a = `here are some options you can try:`
        return `${a}\n**${e.name}:**\n${e.description}\n`
    }, '')
}

const character = new Command( 'character', 'character related commands', [
    new Command('create',
    'Example: \ngm! character create [character_name]\n[attribute_name]:[attribute_value]\n-----\ncheck your server sheet making channel for more info.'
    ),
    new Command('update',
    'Example: \ngm! character update [character_name]\n[attribute_name]:[attribute_value]\n-----\ncheck your server sheet making channel for more info.'
    ),
    new Command('addto',
    'Example: \ngm! character addto [character_name]\n[attribute_name]:[attribute_value]\n-----\nthis will result in a list of values. For example if your attribute is currency:1gp and you add currency:1sp you will have currency: 1gp, 1sp.'
    ),
    new Command('increment',
    'Example: \ngm! character increment [character_name]\n[attribute_name]:[attribute_value]\n-----\nthis will only work to numeric values, it will increment the attibute by the desired amount, but only if the current attribute value is also numeric.'
    ),
] );

var CommandTree = {character}
CommandTree.message = reduceCommandListMessage(CommandTree)

module.exports = CommandTree