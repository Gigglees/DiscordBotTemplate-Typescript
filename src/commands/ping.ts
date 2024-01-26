/*This is the ping command, it's simple. some puts ping into the discord channel and the bot will reply with "pong" */

import { Message } from 'discord.js';

module.exports = {
	name: 'ping',
	description: 'Ping command',
	execute(message: Message, args: string[]) {
		message.channel.send('Pong!');
	},
};
