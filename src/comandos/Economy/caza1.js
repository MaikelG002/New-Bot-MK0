const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const talkedRecently = new Set();



module.exports = class caza1 extends Comandos {
  constructor() {
    super('', 'Economy', [""]);
  }

async run(client, message, args){


    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

   {
  let money = await eco.get(`${usuario}.${user}.vida`) || 0
    console.log(money)
    if(money < 1)return message.channel.send("<:caa:976231936051802162> caña Insuficiente!")
  }

 
  


  }
  
}