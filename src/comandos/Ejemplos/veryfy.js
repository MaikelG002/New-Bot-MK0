const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");



module.exports = class veryfy extends Comandos {
  constructor() {
    super('registrar', 'Ejemplos', [""]);
  }

async run(client, message, args){

  

  let permiso = message.member.hasPermission("MANAGE_ROLES");
if(!permiso){
    message.channel.send('No tiene el permiso de Administrador');
} else{

  
  const member = message.mentions.members.first();


  if(!member) return message.channel.send(` Menciona a un usuario`);
     
    const mirol = message.guild.roles.cache.get("984564333373718571");

   member.roles.remove(mirol);

      message.channel.send(`:white_check_mark: ${message.author} Registro a ${member} Estas Registrado Bienvenido`); //Mandamos mensaje claramente.
      
  
  }
 }
}