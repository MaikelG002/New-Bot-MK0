const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');

module.exports = class v extends Comandos {
  constructor() {
    super('v', 'Ejemplos', [""]);
  }

  run(client, message, args){


    let permiso = message.member.hasPermission("ADMINISTRATOR");
if(!permiso){
    message.channel.send('No tiene el permiso de Administrador');
} else{
  
    
  if(message.author.id !=='601776622797848579') 
  return message.channel.send(`**»** ${message.author}, No tienes permisos`)

message.channel.send(`@everyone

Recuerden Verificarse en el canal <#984202581914058812> y darle click al emoji y ya estarian dentro del servidor`)
  }
  }
}