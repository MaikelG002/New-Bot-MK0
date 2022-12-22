const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');

module.exports = class anuncio extends Comandos {
  constructor() {
    super('anuncio', 'Ejemplos', [""]);
  }

  run(client, message, args){

let permiso1 = message.member.hasPermission("ADMINISTRATOR");
if(!permiso1){
    message.channel.send('No tiene el permiso de Administrador');
} else {

 let texto = args.slice(0).join(" ")
 if(!texto){
   return message.channel.send("Debes escribir lo que quieres que envie")
 }

 let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("__Update Economy__")
        .setDescription(`${texto}`) 
        .setColor("RED")
        .setFooter("Actualizaciones Del servidor ")
    
 message.channel.send(solonumeros)

  }
  }
}