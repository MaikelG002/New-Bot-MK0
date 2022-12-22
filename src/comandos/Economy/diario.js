const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")




module.exports = class diario extends Comandos {
  constructor() {
    super('', 'Economy', [""]);
  }

  
  

async run(client, message, args){

//Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
cooldowns.set(message.author.id+".diario", 0)
       
  //Termina Cooldown//
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

     
    const embed = new Discord.MessageEmbed()

      .setTitle("<:caja:985182290516779068> Recompensas Diarias <:caja:985182290516779068>")
      .setDescription(`

No usar este comando- Prueba
Recibiste: 1  <:caja:985182290516779068> Caja
Recibiste: 10 <:energia:985182546595827782> Energia`)
      .setColor("RED")
    
    

    message.channel.send(embed)

 
  
 }
}
