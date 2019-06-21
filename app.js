const server = require('./express.js');
const Discord = require('discord.js')
const client = new Discord.Client()
client.login(process.env.TOKEN)  // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token

    client.on('message', message => {
