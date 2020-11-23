const { words_array } = require('./config.json');

module.exports = {
	name:'speak',
	description: 'Speak Bot Command',
	arguments: `Needs from 1 to 2 arguments from the list:\n${words_array} `,
	execute(message, args) {
		// if there was any agrument search for one of possible cases and send an answer to it
		if(!args.length) {
			return message.channel.send(`You have not provided any arguments, ${message.author}!`);
		} else if (args[0] === `${words_array[0]}`) {
			return message.channel.send('Hello!');
		} else if (args[0] === `${words_array[1]}`) {
			return message.channel.send('Goodbye!');
		} else if (args[0] === `${words_array[2]}` && !args[1]) {
			return message.channel.send('Meow!');
		} else if (args[0] === `${words_array[3]}` && !args[1]) {
			return message.channel.send('Woof!');
		} else if (args[0] === `${words_array[2]}` && args[1] === `${words_array[3]}`) {
			return message.channel.send('Hisss!');
		} else if (args[0] === `${words_array[3]}` && args[1] === `${words_array[2]}`) {
			return message.channel.send('Growl!');
		}
		// if no case was found just inform the user about it
		message.channel.send(`Command name: speak\nArguments: ${args}\nSorry, but no method is implemented for those arguments`);
	},
};