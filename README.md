### THIS IS THE TYPESCRIPT VERSION!!!

- For the Javascript version visit: https://github.com/Gigglees/DiscordBotTemplate-Javascript

- For the Python version visit: https://github.com/Gigglees/DiscordBotTemplate-Python

### How to use:

First, download a copy of this code.

Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from https://nodejs.org/.

Then open your text editor and navigate to the terminal.
You're going to need to import a few things first

In the terminal, go ahead and type "npm init" and follow the instruction given in the terminal
once done, you're going to need to import a couple of things from npm, paste the following command into your terminal "npm install discord.js typescript @types/node @types/node-fetch ts-node ts-node-dev --save"

Now you're going to need to get some information, like your discord dev application token. This can be found here, if you don't already have an application you will have to make one, which is simple enough https://discord.com/developers. If you do struggle to create an application, help can be found here https://www.youtube.com/watch?v=OY6QoPNJPNw

Now once done, grab your token from your application and then put it inside the "token": "CHANGE_ME", in config.json.

After that, you're good to invite your bot to your server. You can do this here just replace the [client_ID_goes_here] with your clientID found on discord dev portal https://discord.com/oauth2/authorize?client_id=[client_ID_goes_here]&permissions=8&scope=bot

Once your bot is on your server, head back to your terminal and type "npm start" This will start your bot and everything should work perfectly. To turn it off, just go to your terminal again and CTRL + C.

Then the world is your oyster, you have your own bot that you can make changes to as you please.
