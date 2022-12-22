const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');

module.exports = class saydm extends Comandos {
  constructor() {
    super('saydm', 'Ejemplos', [""]);
  }

  run(client, message, args){

let permiso1 = message.member.hasPermission("ADMINISTRATOR");
if(!permiso1){
    message.channel.send('No tiene el permiso de Administrador');
} else {

    if(message.author.id !=='601776622797848579') 
        return message.channel.send(`**»** ${message.author}, No tienes permisos`)

 let texto = args.slice(1).join(" ")
 if(!texto){
   return message.channel.send("Debes escribir lo que quieres que envie")
 }

 const member = message.mentions.members.first();


  if(!member) return message.channel.send(` Menciona a un usuario`)

 let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("__Maikel Graal SERV__")
        .setDescription(`${texto}`) 
        .setColor("RED")
        .setFooter("Mensaje enviado By Maikel G#5258")
    
 member.send(solonumeros)

  }
  }
}