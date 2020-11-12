module.exports = {
	name:'ban',
	description: 'Ban Command',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		if(!message.mentions.users.first()) {
			return message.channel.send(`You have not provided any arguments, ${message.author}!`);
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You want to ban: ${taggedUser.username}`);
		return;
	},
};
