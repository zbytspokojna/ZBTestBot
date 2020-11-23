const fs = require('fs');
// base path to the folder with all the files needed
const path = '/home/anka/Pulpit/ZBTestBot/commands';

module.exports = commandFiles => {
	const data = {};
	data.commands = [];
	// get all commands info from commandFiles into an array
	for(const file of commandFiles) {
		const command = require(`${path}/${file}`);
		data.commands.push(command);
	}
	// just to check if it found all of then
	console.log(`There is ${data.commands.length} commands`);
	// write the data in .json file with some simple formatting
	fs.writeFile(`${path}/list.json`, JSON.stringify(data, null, 4), (err) => {
		if (err) {
			throw err;
		}
		// confirm successfull saving
		console.log('JSON data is saved.');
	});
};