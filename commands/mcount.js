// Not fully implemented - could tell how many members are in each coven or role

module.exports = {
	name:'mcount',
	description: 'Member count Command',
	arguments: 'No arguments implemented',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send(`Total Members: ${message.guild.memberCount}`);
	},
};