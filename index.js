const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Get all the files from the folder commands in .js extention
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Getting other external functions
const welcome = require('./listeners/welcome');
const blacklist = require('./listeners/blacklist');
const cmdinfo = require('./startup/cmdinfo');

// Getting info from config file
const { prefix, token } = require('./config.json');

// welcome and tests
client.on('ready', () => {
	// little msg when Bot comes online it will later have it's own file
	const channel = client.channels.cache.get('700004698597621762');
	const channel2 = client.channels.cache.get('776526864184377417');
	const msg = `Hello! I am online now!\nMy commands prefix is '${prefix}'.\nYou can see avaible commands using !help.`;
	channel.send(msg);
	channel2.send(msg);
	// just some info for me
	console.log(commandFiles);
	// generating list with information about commands
	cmdinfo(commandFiles);
	// init for the welcome funtion
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
	// exclude mgs not staring with prefix and those send by bots
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	// get all arguments
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	// change command name to lower case in case someone used some upper case letters
	const commandName = args.shift().toLowerCase();
	// if the is no command like this
	if(!client.commands.has(commandName)) {
		return message.reply('There is no such command. Try again.');
	}
	// otherwise get the one fitting and try to execute it
	const command = client.commands.get(commandName);
	try {
		command.execute(message, args);
	} catch(error) {
		console.error(error);
		message.reply('There was an issue executing this command!');
	}
});