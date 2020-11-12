module.exports = {
	name:'mcount',
	description: 'Member count Command',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send(`Total Members: ${message.guild.memberCount}`);
	},
};