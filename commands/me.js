module.exports = {
	name:'me',
	description: 'Personal info Command',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send(`Username: ${message.author.username}`);
		message.channel.send(`ID: ${message.author.id}`);
	},
};