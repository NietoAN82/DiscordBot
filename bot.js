const Discord = require('discord.js');
const fs = require('fs');
const db = require('./database.js');
require('dotenv').config();


const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on("message", msg => {
	if(msg.author.bot) return
	if(msg.content === "$koth"){
		const prom = db.getRandQuotes();
  		prom.then(reason => {
			msg.channel.send(reason)
			
})
	  
	}
  })
  
client.login(process.env.TOKEN);