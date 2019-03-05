//Podłanczamy Bibloteki Podstawowe
const Discord = require("discord.js");
const botconfig = require("./botconfig.json");

const bot = new Discord.Client({disableEveryone: true});
//podazywanie Wiadomości Ze Bot się Uruchomił!
bot.on("ready", async () => {
  console.log("{NAZWA BOTA} jest Online!");
});
//komendy
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
// Tylda to `` ~
  if(cmd === `${prefix}Witam`){
    message.channel.send("Witam Witam Stworzyło mie Coding Studio!");
  }

})

bot.login(botconfig.token)
