const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!bUser) return message.channel.send("Je ne trouve la personne!");

    let bReason = args.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No!");

    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("La personne ne peut pas être kick");



    let banEmbed = new Discord.RichEmbed()

    .setDescription("~Ban~")

    .setColor("#bc0000")

    .addField("Personne ban", `${bUser} with ID ${bUser.id}`)

    .addField("Ban par", `<@${message.author.id}> with ID ${message.author.id}`)

    .addField("Ban dans le channels", message.channel)

    .addField("Temps", message.createdAt)

    .addField("Raison", bReason);



    let incidentchannel = message.guild.channels.find(`name`, "incidents");

    if(!banchannel) return message.channel.send("Je ne trouve pas le channels.");



    message.guild.member(bUser).ban(bReason);

    incidentchannel.send(banEmbed);

}



module.exports.help = {

  name:"ban"

}
