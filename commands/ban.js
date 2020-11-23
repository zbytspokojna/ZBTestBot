// Non fully implemented - only returns a msg

module.exports = {
	name:'ban',
	description: 'Ban Command',
	arguments: 'Needs @mention of a user you want to suggest banning.',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		// if they did not mention a user
		if(!message.mentions.users.first()) {
			return message.channel.send(`You have not provided any arguments, ${message.author}!`);
		}
		// get the first mentioned user
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You want to ban: ${taggedUser.username}`);
		return;
	},
};