const Discord = require('discord.js');
const fs = require('fs');
// base path to the folder with all the files needed
const path = '/home/anka/Pulpit/ZBTestBot/commands';

module.exports = {
	name:'help',
	description: 'Help Command',
	arguments: 'No arguments or name of command you want to check description of.',
	execute(message, args) {
		// variable for later tests
		let found = false;
		// we read the list of commands created at the startup
		fs.readFile(`${path}/list.json`, 'utf8', function readFileCallback(err, data) {
			if (err) {
				return console.log(err);
			// if they input more than one command_name
			} else if (args.length >= 2) {
				message.channel.send(`You can input only one argument ${message.author}`);
			// if they just want to know all commands avaible
			} else if (!args.length) {
				// transform data into an object
				const list = JSON.parse(data);
				const names = [];
				// we create an array from names of commands in the list
				list.commands.forEach(element => {
					names.push(element.name);
				});
				// and then create embed with information and send it
				const embed = new Discord.MessageEmbed()
					.setColor('#ea1702')
					.setTitle('COMMANDS LIST')
					.addFields(
						{ name: 'You can use commands like', value: `${names}` },
					)
					.setFooter('For more info about a command you can use !help command_name');
				return message.channel.send(embed);
			// if they want to know more information about a command
			} else if (args.length == 1) {
				// transform data into an object
				const list = JSON.parse(data);
				let command = {};
				// we search if that command is on the list, if yes fetch it and set our variable to true
				list.commands.forEach(element => {
					if (element.name == args[0]) {
						found = true;
						command = element;
					}
				});
				// if we found a name on the list we create an embed based on infomation in the element and send it
				if (found) {
					const embed = new Discord.MessageEmbed()
						.setColor('#ea1702')
						.setTitle('COMMAND INFO')
						.addFields(
							{ name: `${command.name}`, value: `${command.arguments}` },
						)
						.setFooter(`${command.description}`);
					return message.channel.send(embed);
				// otherwise we just inform the user that such command does not exist
				} else {
					const embed = new Discord.MessageEmbed()
						.setColor('#ea1702')
						.setTitle('COMMAND INFO')
						.setDescription(`Command ${args} is not implemented`);
					return message.channel.send(embed);
				}
			}
		});
	},
};