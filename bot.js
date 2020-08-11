const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === '!shake') {
        // send back "Pong." to the channel the message was sent in
        var facts = ["Most likely", "Better not tell you now", "Yes", "Yes definitely", "Very doubtful", "You may rely on it", "Don’t count on it", "As I see it, yes", "It is decidedly so", "Ask again later", "Concentrate and ask again", "It is certain", "My sources say no", "Signs point to yes", "Without a doubt", "Outlook not so good", "Cannot predict now", "Outlook good", "My reply is no", "Reply hazy, try again"];
        var fact = Math.floor(Math.random() * facts.length);
        message.channel.send(facts[fact]);
    }
    ;
});
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
