const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const welcome = require('./listeners/welcome');
const blacklist = require('./listeners/blacklist');
const { prefix, token, animator } = require('./config.json');

// welcome and tests
client.on('ready', () => {
	console.log(commandFiles);
	console.log(`prefix = ${prefix}`);
	console.log(`${animator.name} is in coven ${animator.coven}`);
	welcome(client);
});

client.login(token);

// blacklist for words
client.on('message', message => {
	if (message.author.bot) return;
	blacklist(message);
});

// making a list of possible commands
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// commands
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if(!client.commands.has(commandName)) {
		return message.reply('There is no such command. Try again.');
	}
	const command = client.commands.get(commandName);
	try {
		command.execute(message, args);
	} catch(error) {
		console.error(error);
		message.reply('There was an issue executing this command!');
	}
});