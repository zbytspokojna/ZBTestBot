// Not fully implemented - could give some more status info about it

module.exports = {
	name:'server',
	description: 'Server Info Command',
	arguments: 'No arguments implemented',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send(message.guild.name);
	},
};