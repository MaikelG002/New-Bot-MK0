const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("armas");
let upload1 = new megadb.crearDB("upload");



module.exports = class uploadnoob extends Comandos {
  constructor() {
    super('', 'Economy', [""]);
  }

async run(client, message, args){

 

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

 
  


 upload1.establecer(`${user}`,{
          upload: "https://cdn.discordapp.com/attachments/984223971111227463/1004191574793650386/Noob-Upload.png"
          
          
        }); 

  message.channel.send(`<:locking:987799419065876510> Se añadio El upload <:locking:987799419065876510>`)

  
  }   
}