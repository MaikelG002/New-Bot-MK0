const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let animales = new megadb.crearDB("animales");



module.exports = class animales extends Comandos {
  constructor() {
    super('animales', 'Economy', [""]);
  }

async run(client, message, args){

 

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

 
  


 animales.establecer(`${server}.${user}`,{      
   sten: 0
   
          
          
        }); 

  message.channel.send(`<:locking:987799419065876510> Se añadio las variables <:locking:987799419065876510>`)

  
  }   
}