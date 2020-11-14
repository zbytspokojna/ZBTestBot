const { welcomeId, rulesId } = require('./config.json');

module.exports = client => {
	client.on('guildMemberAdd', member => {
		const msg = `Welcome to our server, ${member}. Please check out ${member.guild.channels.cache.get(rulesId).toString()}!`;
		const channel = member.guild.channels.cache.get(welcomeId);
		channel.send(msg);
	});
};