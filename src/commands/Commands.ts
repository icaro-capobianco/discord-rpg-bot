import MessageWrap from "src/models/MessageWrap"

const roles = [
    { id: 'casual-bot', name: 'Casual Bot', color: 'RED', mentionable: false },
]

function createRoles( message: MessageWrap ) {
    const guild = message.discordMessage.guild

    try {
        if( guild ) {
            roles.forEach(role => {
                guild.createRole(role)
            });
        }
    } catch (error) {
    }
}
