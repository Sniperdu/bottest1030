const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!kUser) return message.channel.send("Can't find user!");

    let kReason = args.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No");

    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");



    let kickEmbed = new Discord.RichEmbed()

    .setDescription("~Kick~")

    .setColor("#e56b00")

    .addField("Personne kick", `${kUser} with ID ${kUser.id}`)

    .addField("Kick By", `<@${message.author.id}> with ID ${message.author.id}`)

    .addField("Kick dans le channels", message.channel)

    .addField("Temps", message.createdAt)

    .addField("Raison", kReason);



    let kickChannel = message.guild.channels.find(`name`, "incidents");

    if(!kickChannel) return message.channel.send("Je ne trouve pas le channels.");



    message.guild.member(kUser).kick(kReason);

    kickChannel.send(kickEmbed);

}



module.exports.help = {

  name:"kick"

}
