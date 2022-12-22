const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class quitarban extends Comandos {
  constructor() {
    super('quitarban', 'adminadd', [""]);
  }

async run(client, message, args){

  let permiso = message.member.hasPermission("MANAGE_ROLES");
if(!permiso){
    message.channel.send('No tiene el permiso de Administrador');
} else{

  
  const member = message.mentions.members.first();


  if(!member) return message.channel.send(` Menciona a un usuario`);

  if(message.author.id !=='601776622797848579') 
        return message.channel.send(`**»** ${message.author}, No tienes permisos`)
    
      eco.obtener(`${member.id}` + `.ban`);
     
    

    let texto =   Math.floor(1)
  
      message.channel.send(`:x: ${message.author} Le quitaste el ban a ${member}  <:locking:987799419065876510> ${texto}`); //Mandamos mensaje claramente.
      
    eco.restar(`${member.id}.ban`, texto)
  
 }
}
}