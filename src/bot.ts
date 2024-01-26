import { Client, GatewayIntentBits, ActivityType } from 'discord.js';
import { token, clientId, guildId, prefix } from './config.json';

/* Intents are bitwise values that can be ORed ( | ) to indicate which events (or groups of events) you want Discord to send your app.
A list of intents and their corresponding events are listed in the intents section.
Read more here: https://discord.com/developers/docs/topics/gateway#:~:text=Intents%20are%20bitwise%20values%20that,listed%20in%20the%20intents%20section. */

/* These are commands, the code can be found in the commands folder. */
const pingCommand = require('./commands/ping');
const helloCommand = require('./commands/hello');

const commands: { [key: string]: any } = {
	ping: pingCommand,
	hello: helloCommand,
};

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

/* This is "onReady", pretty much when the bot starts, this runs. You can set it to do anything really,
   including sending embed messages, changing the bot status, sending console logs, sending plain messages, and more. */
client.on('ready', () => {
	/* This is how you change the bot status within Discord. Pretty simple.
     So on ready, the client.user will setActivity of the bot */
	client.user!.setActivity('i am a discord bot.', {
		type: ActivityType.Playing,
	});
});

/* This is the on MessageCreate section. Pretty much, this will wait for messages from a user,
   check if it's from the bot or not, and then reply accordingly. */
client.on('messageCreate', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift()!.toLowerCase();

	if (commands[command]) {
		commands[command].execute(message, args);
	}
});

client.login(token); // This is just your client log in, pretty much tells Discord your bot.
