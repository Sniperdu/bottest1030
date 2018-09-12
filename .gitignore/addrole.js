const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {



  //!addrole @andrew Dog Person

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Désoler tu ne peut pas");

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!rMember) return message.reply("Je ne trouve pas le joueur.");

  let role = args.join("Salut bienvenue").slice(22);

  if(!role) return message.reply("Role");

  let gRole = message.guild.roles.find(`name`, role);

  if(!gRole) return message.reply("Je ne trouve pas ce role.");



  if(rMember.roles.has(gRole.id)) return message.reply("Tu as déjà se role");

  await(rMember.addRole(gRole.id));



  try{

    await rMember.send(`Bravo tu as eu le role ${gRole.name}`)

  }catch(e){

    console.log(e.stack);

    message.channel.send(`Bravo à <@${rMember.id}>, pour avoir eu le role ${gRole.name}.`)

  }

}



module.exports.help = {

  name: "addrole"

}
