// eslint-disable-next-line no-unused-vars
const { blacklist } = require('./config.json');

module.exports = message => {
	const searchRegExp = /\s/g;
	const replaceWith = '';
	// get rid of all the spaces and make everything a lower case
	const string = message.content.replace(searchRegExp, replaceWith).toLowerCase();
	// search if part of the string has a word from the list
	if (blacklist.some(word => string.includes(`${word}`))) {
		message.delete();
		message.channel.send(`${message.author} you used a blacklisted word and your message was deleted! Please refrain from doing it in the future!`);
	}
};