const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const { prefix, token, animator } = require('./config.json');

client.once('ready', () => {
	console.log(commandFiles);
	console.log(`prefix = ${prefix}`);
	console.log(`${animator.name} is in coven ${animator.coven}`);
});

client.login(token);

for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('guildMemberAdd', member => {
	console.log('I am in');
	// eslint-disable-next-line no-shadow
	const channel = member.guild.channels.find(channel => channel.name === 'welcome');
	console.log('I am in 2');
	if (!channel) return;
	console.log('I am in 3');
	channel.send(`Welcome to out server, ${member}.\nPlease read the rules in the rules channel!`);
});

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