const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
// console.log(process.env.TOKEN);
client.login(process.env.TOKEN);