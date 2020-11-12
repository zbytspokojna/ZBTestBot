const Discord = require('discord.js');

module.exports = {
	name:'feel',
	description: 'Feelings Command',
	execute(message, args) {
		if(!args.length) {
			return message.channel.send(`You have not provided any arguments, ${message.author}!`);
		} else if (args[0] === 'bad') {
			const embed = new Discord.MessageEmbed()
				.setColor('#03c2fc')
				.setTitle('FEELINGS CORNER')
				.setDescription('Things will get better. I hope this will cheer you up!')
				.setImage('https://i.redd.it/zzmzrnkjwjs41.jpg')
				.setFooter('Feelings Bot')
				.setTimestamp();
			return message.channel.send(embed);
		} else if (args[0] === 'good') {
			const embed = new Discord.MessageEmbed()
				.setColor('#03c2fc')
				.setTitle('FEELINGS CORNER')
				.setDescription('That is good, but you always can feel better so here is a pic of a cat!')
				.setImage('https://media.timeout.com/images/105634590/1024/576/image.jpg')
				.setFooter('Feelings Bot')
				.setTimestamp();
			return message.channel.send(embed);
		} else if (args[0] === 'great') {
			const embed = new Discord.MessageEmbed()
				.setColor('#03c2fc')
				.setTitle('FEELINGS CORNER')
				.setDescription('That is awesome!')
				.setImage('https://img.cutenesscdn.com/630x/cme/cuteness_data/s3fs-public/diy_blog/Teach-A-Dog-How-To-Give-a-High-Five.jpg?type=webp')
				.setFooter('Feelings Bot')
				.setTimestamp();
			return message.channel.send(embed);
		}
		message.channel.send(`Command name: feel\nArguments: ${args}\nSorry, but no method is implemented for those arguments`);
	},
};