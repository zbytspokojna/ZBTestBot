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

client.on('message', message =>{
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if(!client.commands.has(commandName)) return;
	const command = client.commands.get(commandName);
	try {
		command.execute(message, args);
	} catch(error) {
		console.error(error);
		message.reply('There was an issue executing this command!');
	}
});