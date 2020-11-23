const Discord = require('discord.js');

module.exports = {
	name:'sleep',
	description: 'Sleep Reminder Command',
	arguments: 'Needs two arguments:\nhours (max 23)\nminutes (max 60)',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		// if they did not provide any arguments
		if(!args.length) {
			return message.channel.send(`You have not provided any arguments, ${message.author}!`);
		// if provided arguments are not intiger
		} else if (isNaN(parseInt(args[0])) || isNaN(parseInt(args[1]))) {
			return message.channel.send(`You have to input two numbers, ${message.author}!`);
		// if provided arguments go over the max values
		} else if (parseInt(args[0]) > 23 || parseInt(args[1]) > 60) {
			return message.channel.send(`One of the arguments was too big, ${message.author}!`);
		// otherwise set the reminder and inform the user
		} else {
			// send msg to the channel
			message.channel.send(`Your reminder was set. Please check your DMs! ${message.author}`);
			// send first DM
			message.author.send(`Hello! This is your SLEEP BOT! If you will be online in ${args[0]} hours and ${args[1]} minutes you will get a reminder via your DM!`);
			// calculate time in ms
			const reminder = (parseInt(args[0]) * 3600000) + (parseInt(args[1]) * 60000);
			// set the async timer
			setTimeout(async () => {
				// if person is not offline send an embed with reminder via DM
				if (message.author.presence.status != 'offline') {
					const embed = new Discord.MessageEmbed()
						.setColor('#ea1702')
						.setTitle('SLEEP REMINDER')
						.setDescription('Time is up! Your should be now heading straight to bed!')
						.setImage('https://media1.giphy.com/media/U7Lvtcuqh4WZy/giphy.gif?cid=ecf05e47tlfk47uemjnjgwlgjqmwk7ciz586vrz2zz4p5kmn&rid=giphy.gif')
						.setFooter('Sleep Bot')
						.setTimestamp();
					return message.author.send(embed);
				}
			}, reminder);
		}
	},
};