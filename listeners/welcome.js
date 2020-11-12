module.exports = {
	name:'welcome',
	description: 'Welcome Bot',
	// eslint-disable-next-line no-unused-vars
	// TO IMPLEMENT LATER
	execute(client) {
		client.on('guildMemberAdd', member => {
			console.log(member);
		});
	},
};