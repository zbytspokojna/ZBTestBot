module.exports = {
	name:'server',
	description: 'Server Command',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send(message.guild.name);
	},
};