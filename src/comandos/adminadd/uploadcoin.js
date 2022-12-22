const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class uploadcoin extends Comandos {
  constructor() {
    super('quitaruploadcoin', 'adminadd', [""]);
  }

async run(client, message, args){

  let permiso = message.member.hasPermission("ADMINISTRATOR");
if(!permiso){
    message.channel.send('No tiene el permiso de Administrador');
} else{

  
  const member = message.mentions.members.first();


  if(!member) return message.channel.send(` Menciona a un usuario`);
     
    
     const dinero_robar = await eco.obtener(`${member.id}` + `.uploadcoin`);
     
    let texto = args.slice(1).join(" ")
 if(!texto){
   return message.channel.send("Debes escribir un monto")
   
 }

    const random_dinero =   Math.floor(Math.random() * texto)
  
      message.channel.send(`:x: ${message.author} Le quitaste  a ${member}  <:emoji_47:1004416241181655061> ${texto} UploadCoin`); //Mandamos mensaje claramente.
      
    eco.restar(`${member.id}.uploadcoin`, texto)
  
 }
}
}