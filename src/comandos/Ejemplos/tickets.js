const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class tickets extends Comandos {
  constructor() {
    super('', 'Ejemplo', [""]);
  }

  run(client, message, args) {

   
 let texto = args.slice(0).join(" ")
 if(!texto){
   return message.channel.send("Debes escribir lo que quieres que envie")
 }

 message.channel.send(texto)
    
		
  }
}
