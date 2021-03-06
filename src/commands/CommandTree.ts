import CommandList from "./CommandList";
import Command from "./Command";

function returnNull(){
    console.log()
}

const characterCommands = new Command( 'character', returnNull, 'character related commands', [
    new Command('create', returnNull, 'Example: \ngm! character create [character_name]\n[attribute_name]:[attribute_value]\n-----\ncheck your server sheet making channel for more info.' ),
    new Command('update', returnNull, 'Example: \ngm! character update [character_name]\n[attribute_name]:[attribute_value]\n-----\ncheck your server sheet making channel for more info.'),
    new Command('addto', returnNull, 'Example: \ngm! character addto [character_name]\n[attribute_name]:[attribute_value]\n-----\nthis will result in a list of values. For example if your attribute is currency:1gp and you add currency:1sp you will have currency: 1gp, 1sp.'),
    new Command('increment', returnNull, 'Example: \ngm! character increment [character_name]\n[attribute_name]:[attribute_value]\n-----\nthis will only work to numeric values, it will increment the attibute by the desired amount, but only if the current attribute value is also numeric.'),
] );

export default new CommandList( [characterCommands] )
