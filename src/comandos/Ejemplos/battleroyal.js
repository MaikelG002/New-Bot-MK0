const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');

module.exports = class battleroyal extends Comandos {
  constructor() {
    super('r', 'Ejemplos', [""]);
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
        .setTitle("Alerta BR")
        .setDescription(`**Battle Royal Comienza En 5 Minutos**`) 
        .setColor("RED")
        .setFooter("--Comando By MaikelG--")
    .setImage("https://media.discordapp.net/attachments/609915952548544532/999196887397715998/2022_07_22_brexp22_full.png")
 
 canal.send(texto)

canal.send("<@&999376391202148464>")
  }
  }
}