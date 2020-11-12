const fs = require('fs');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

module.exports = {
	name:'help',
	description: 'Help Command',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send('You can use commands like');
		for(const file of commandFiles) {
			const command = require(`./${file}`);
			message.channel.send(`\n!${command.name}`);
		}
	},
};