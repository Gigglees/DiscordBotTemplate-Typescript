/*Again, another command. This time a hello command. */

import { Message } from 'discord.js';

module.exports = {
	name: 'hello',
	description: 'Hello command',
	execute(message: Message, args: string[]) {
		message.channel.send('Hello!');
	},
};
