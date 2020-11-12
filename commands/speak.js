const { words_array } = require('./config.json');

module.exports = {
	name:'speak',
	description: 'Speak Bot Command',
	execute(message, args) {
		if(!args.length) {
			return message.channel.send(`You have not provided any arguments, ${message.author}!`);
		} else if (args[0] === `${words_array[0]}`) {
			return message.channel.send('Hello!');
		} else if (args[0] === `${words_array[1]}`) {
			return message.channel.send('Goodbye!');
		} else if (args[0] === `${words_array[2]}` && !args[1]) {
			return message.channel.send('Meow!');
		} else if (args[0] === `${words_array[2]}` && args[1] === `${words_array[3]}`) {
			return message.channel.send('Hisss!');
		}
		message.channel.send(`Command name: speak\nArguments: ${args}\nSorry, but no method is implemented for those arguments`);
	},
};