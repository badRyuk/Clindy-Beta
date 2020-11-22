const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "help",
  description: "Help command",
 run: async(client,message,args,guild) => {
       const embed = new MessageEmbed()
        .setTitle('WGOBot Help')
      // Set the color of the embed
      .setColor(message.guild.me.displayHexColor)
      // Set the main content of the embed
      .addField('help', '``Shows all the bot commands and aliasis | This same message``', true)
      .addField('addrole', '``Adds the role to the given user``', true)
      .addField('announce', '``Announces your message in`` <#747726392669634611>', true)
      .addField('avatar', '``Check your or a users avatar``', true)
      .addField('ban', '``Bans a user from the server``', true)
      .setDescription('Here are my commands')
	  .addField('calculate', '``Solves the given math expression``', true)
    .addField('channelinfo', '``Sends Info for a channel``', true)
    .addField('warn', '``Warns a member of the server``', true)
    .addField('warnings', '``Checks a users warnings``', true)
    .addField('deletewarns', '``Clears a users warnings``', true)
    .addField('createcolor', '``Creates a color role!``', true)
    .addField('dm', '``DM\'s the specified user or user ID``', true)
    .addField('embed', '``Embed your message``', true)
      .addField('emojis', '``Sends all the server emojis``', true)
       .addField('getid', '``Gets the ID``', true)
       .addField('kick', '``Kicks a user from the server``', true)
             .addField('links', '``WGOQatar Links!``', true)
       .addField('members', '``Sends the member stats of the server``', true)
     // .addField('mute', '``Mutes a user for the given time``', true)
      .addField('setnickname', '``Sets a users nickname ``', true)
      .addField('permissions', '``Check your or a users permissions``', true)
      .addField('removerole', '``Removes a role from the specified user``', true)
      .addField('roleinfo', '``Sends a role\'s info``', true)
       .addField('emojify', '``Emojify the given text``', true)
      .setFooter('Clindy  •  Page 1/2', 'https://cdn.discordapp.com/avatars/773772743963181066/88ba22aa630cedc93ab3233c31bb87df.png?size=256')
      .setTimestamp()
 const helpembed = new MessageEmbed()
 
 .addField('ping', '``Sends bot\'s ping``', true)
.addField('purge', '``Purge upto 100 messages of a channel or user``', true)
.addField('roll', '``Roll a dice...``', true)
.addField('rps', '``Play RPS with the bot``', true)
.addField('say', '``Make the bot say your message``', true)
 .addField('serverinfo', '``Send the serverinfo``', true)
.addField('slowmode', '``Edit a given channel\'s Slowmode``', true)
           .addField('stealemoji', '``Steals an emoji and adds it to ypur server``', true)
             .addField('timer', '``Set a timer and the bot will send you a DM to remind you``', true)
               .addField('unban', '``Unban\'s a previously banned user``', true)
                 .addField('uptime', '``Sends bot\'s uptime``', true)
                   .addField('userinfo', '``Sends a given user\'s info``', true)
                   .addField('aliasis', '`All bot command aliasis`', true)
.addField('botinfo', '`Bots Information`', true)
       .addField('coinflip', '`Flip a coin...`', true)
       .addField('gstart', '`Starts a giveaway in the specified channel`', true)
       .addField('greroll', '`Rerolls an ended giveaway`', true)
       .addField('gend', '`Ends a running giveaway in the server`', true)
  
      .setFooter('Clindy  •  Page 2/2', 'https://cdn.discordapp.com/avatars/773772743963181066/88ba22aa630cedc93ab3233c31bb87df.png?size=256')
      .setTimestamp()
           .setColor(message.guild.me.displayHexColor)
     
    message.channel.send(embed);
    message.channel.send(helpembed)
      }
};
