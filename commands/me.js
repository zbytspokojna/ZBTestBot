// Not fully implemented - could tell someone their roles, level, assigments on the server etc

module.exports = {
	name:'me',
	description: 'Personal info Command',
	arguments: 'No arguments implemented',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send(`Username: ${message.author.username}`);
		message.channel.send(`ID: ${message.author.id}`);
	},
};