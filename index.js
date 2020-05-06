const Discord = require('discord.js')
const token = 'NzA3NDUwMTk3NDQxMjQ5MzAy.XrI_0A.9rVXjwdF6Ypbl_YuLysC9Wi7Cq8'

const client = new Discord.Client();

client.on('ready', () => {
    console.log('bot connected')
});

client.login(token)