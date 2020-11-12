const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const { prefix, token, animator } = require('./config.json');
const welcomeId = '776526920182792238';
const rulesId = '776572377088786443';

// tests at start
client.once('ready', () => {
	console.log(commandFiles);
	console.log(`prefix = ${prefix}`);
	console.log(`${animator.name} is in coven ${animator.coven}`);
});

client.login(token);

// making a list of possible commands
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// welcome msg
client.on('guildMemberAdd', member => {
	const msg = `Welcome to our server, ${member}. Please check out ${member.guild.channels.cache.get(rulesId).toString()}!`;
	const channel = member.guild.channels.cache.get(welcomeId);
	channel.send(msg);
});

// commands
client.on('message', message =>{
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