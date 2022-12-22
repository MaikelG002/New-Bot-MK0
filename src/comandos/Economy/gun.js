const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("armas");



module.exports = class gun extends Comandos {
  constructor() {
    super('', 'Economy', [""]);
  }

 run(client, message, args){

 

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag



 eco.establecer(`${user}`,{
          municion9: 50,
          municion12: 50,
          municion18: 50,
          startgun: 1,
          makarov: 0,
          mk23: 0,
          glock18: 0,
          k180: 0,
          m1911silver: 0,
          gsocom: 0,
          m91: 0,
          magnum44: 0,
          colt6: 0,
          streetshotgun: 0,
   sten: 0,
   mpx: 0,
   rafor: 0,
   spectre: 0,
   m16: 0,
   mp7: 0,
   vector: 0,
   shipka: 0,
   x26akimbo: 0,
   bar: 0,
   m107: 0,
   metalstorm: 0,
   thompson: 0,
   m4: 0,
   rpg7: 0,
   minigun: 0,
   ghostm4: 0,
   dsr50: 0,
   acr: 0,
   mp5: 0,
   chemical: 0,
   tar21: 0,
   smr: 0,
   fnp90gun: 0,
   xcro: 0,
   aa12: 0,
   pbp: 0,
   ionkatana: 0,
   ionsmgrpg: 0,
   ionbow: 0,
   ionpulse: 0,
   ionsniper: 0,
   ioncarbine: 0
          
          
        }); 

  message.channel.send(`<:locking:987799419065876510> Se añadio las variables <:locking:987799419065876510>`)

  
  }   
}