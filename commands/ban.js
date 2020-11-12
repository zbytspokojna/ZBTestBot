module.exports = {
	name:'ban',
	description: 'Ban Command',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You want to ban: ${taggedUser.username}`);
		return;
	},
};