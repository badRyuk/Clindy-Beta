const ms = require("ms");
const { MessageEmbed } = require("discord.js");
const { Timers } = require("../variable.js");
module.exports = {
  name: "voterem",
  description: "Set a timer for yourself and the bot will remind you x.x",
 run: async(client,message,args,guild) => {
         if (message.author.id !== "726452843606966405") return message.channel.send('This command can only be used by the bot Owner.')
    if (!args[0]) {
      return message.channel.send(
        `You did not specify the amount of time you wish to set a timer for!`
      );
    }
    if (!args[0].endsWith("d")) {
      if (!args[0].endsWith("h")) {
        if (!args[0].endsWith("m")) {
          return message.channel.send(
            `You did not use the proper format for the the time!`
          );
        }
      }
    }
    if (isNaN(args[0][0])) {
      return message.channel.send(`That is not a number!`);
    }
    Timers.set(message.author.id + " G " + message.guild.name, {
      Guild: message.guild.name,
      Author: {
        Tag: message.author.tag,
        ID: message.author.id,
      },
      Time: ms(args[0]),
    });
    message.channel.send(
      `Vote Reminder Set. You will be reminded through a DM`
    );
    setTimeout(() => {
      let Embed = new MessageEmbed()
        .setTitle(`Vote Reminder`)
        .setDescription(
          `This is a vote reminder`
        )
        .addField(`Dank Memer 
        `, '[top.gg](https://top.gg/bot/270904126974590976/vote) | [dbl](https://discordbotlist.com/bots/dank-memer/upvote) | [bfd](https://botsfordiscord.com/bot/270904126974590976/vote)')
        .addField(`Dank Memer Community
        `,'[Dank Memer Community](https://top.gg/servers/682809584985178135/vote)')
        .addField(`Dank Vibes
        `,'[Dank Vibes](https://top.gg/servers/595457764935991326/vote)')
        .addField(`The Titans
        `,' [The Titans](https://top.gg/servers/748088075623727146/vote)')
        .addField(`The Dank Kingdom
        `,' [The Dank Kingdom](https://top.gg/servers/645375092079067136/vote)')
        .addField(`Bot Farm
        `,' [Bot Farm](https://top.gg/servers/645753561329696785/vote)')
         .addField(`Dank Trades
        `,'[Dank Trades](https://top.gg/servers/719180744311701505/vote)')
        .addField(`High5 Dankers
        `,' [High5 Dankers](https://top.gg/servers/678164358378946580/vote)')
        .addField(`Supreme Dankers
        `, '[Supreme Dankers](https://top.gg/servers/708607643987476480/vote)')
        .addField(`Midnight Oasis
        `,' [Midnight Oasis](https://top.gg/servers/748436594004066376/vote)')
        .setColor(`RANDOM`);
      message.author.send(Embed);
      Timers.delete(message.author.id + " G " + message.guild.name);
    }, ms(args[0]));
  },
};