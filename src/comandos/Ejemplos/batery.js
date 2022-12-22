const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class batery extends Comandos {
    constructor() {
        super('low', 'Ejemplos', [""]);
  }

 async run(client, message, args) {
    
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag


    {
        {
        let telefono = await eco.get(`${user}.telefono`) || 0
          if(telefono < 0)return message.channel.send(`**»** <:emoji_28:992127867938930739> Se agoto la beteria del movil ${telefono}% `)
        }//Sirve para poner tienes menos de 1 vida 
      
          let random = Math.floor(Math.random() * (1 - 6)) + 6
          console.log("Se le descargo la bateria en un" + random + "% en la cuenta de " + usuario)
      
          await eco.restar(`${user}.telefono`, random)}
		
  }
}