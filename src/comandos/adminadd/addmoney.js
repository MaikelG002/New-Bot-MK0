const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class addmoney extends Comandos {
  constructor() {
    super('darefectivo', 'adminadd', [""]);
  }

async run(client, message, args){

  let permiso = message.member.hasPermission("ADMINISTRATOR");
if(!permiso){
    message.channel.send('No tiene el permiso de Administrador');
} else{

  
  const member = message.mentions.members.first();


  if(!member) return message.channel.send(` Menciona a un usuario`);
     
  if(message.author.id !=='601776622797848579') 
        return message.channel.send(`**»** ${message.author}, No tienes permisos`)
  
     const dinero_robar = await eco.obtener(`${member.id}` + `.efectivo`);
     
    let texto = args.slice(1).join(" ")
 if(!texto){
   return message.channel.send("Debes escribir un monto")
   
 }

    const random_dinero =   Math.floor(Math.random() * texto)
  
      message.channel.send(`:white_check_mark: ${message.author} Le Diste a ${member}  <:era_petzmoney1:1017944727271768065> ${texto} Gralats`); //Mandamos mensaje claramente.
      
    eco.sumar(`${member.id}.efectivo`, texto)
  
 }
}
}