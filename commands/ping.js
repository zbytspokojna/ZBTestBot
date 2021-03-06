const Discord = require('discord.js');

module.exports = {
	name:'ping',
	description: 'Ping Command',
	arguments: 'No arguments implemented',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		message.channel.send('Pinging...').then(m =>{
			// calculating the latency
			const ping = m.createdTimestamp - message.createdTimestamp;
			// create and send and embed
			const embed = new Discord.MessageEmbed()
				.setColor('#03c2fc')
				.setTitle('PONG!')
				.setDescription(`Your ping is ${ping}ms`)
				.setImage('https://icon-icons.com/icons2/67/PNG/64/Tennis_tabletennis_sport_pingpon_13289.png')
				.setFooter('Ping Bot')
				.setTimestamp();
			message.channel.send(embed);
		});
	},
};