const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');

module.exports = class auction extends Comandos {
  constructor() {
    super('terminarsub', 'Ejemplos', [""]);
  }

  run(client, message, args){


    let permiso = message.member.hasPermission("ADMINISTRATOR");
if(!permiso){
    message.channel.send('No tiene el permiso de Administrador');
} else{
  
 let canal = message.mentions.channels.first()
 if(!canal){
   return message.channel.send("Debes mencionar un canal")
 }
    

    let texto = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Termino La Subasta")
        .setDescription(`**Felicidades al Campeon, En los siguientes minutos recibiras las recompensa**`) 
        .setColor("YELLOW")
        .setFooter("--Comando By MaikelG--")
    .setImage("")
 
 canal.send(texto)


  }
  }
}