// eslint-disable-next-line no-unused-vars
const { blacklist } = require('./config.json');

module.exports = message => {
	const searchRegExp = /\s/g;
	const replaceWith = '';
	const string = message.content.replace(searchRegExp, replaceWith).toLowerCase();
	if (blacklist.some(word => string.includes(`${word}`))) {
		message.delete();
		message.channel.send(`${message.author} you used a blacklisted word and your message was deleted! Please refrain from doing it in the future!`);
	}
};