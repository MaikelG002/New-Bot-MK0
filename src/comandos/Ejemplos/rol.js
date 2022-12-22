const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class rol extends Comandos {
  constructor() {
    super('moneyrol', 'Ejemplos', [""]);
  }

  run(client, message, args) {

    let permiso = message.member.hasPermission("ADMINISTRATOR");
if(!permiso){
    message.channel.send('No tiene el permiso de Administrador');
} else{


    const member = message.mentions.roles.first();


  if(!member) return message.channel.send(` Menciona un rol`);
     
    
 
    let texto = args.slice(1).join(" ")
 if(!texto){
   return message.channel.send("Debes escribir un monto")
   
 }

    const random_dinero =   Math.floor(Math.random() * texto)
  
      message.channel.send(`:white_check_mark: ${message.author} Le Diste a ${member}  <:Gralats:874761923114205194> ${texto} Gralats`); //Mandamos mensaje claramente.
      
   member.members.map(user => { eco.sumar(`${user.id}.efectivo`, texto)})
  
  
 }	
}
}