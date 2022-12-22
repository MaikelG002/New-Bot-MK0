const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("armas");



module.exports = class armas extends Comandos {
  constructor() {
    super('', 'Economy', [""]);
  }

async run(client, message, args){

 

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag



  
  ///////// constante nombramiento/////
message.channel.send(message.author.username, message.author.avatarURL({ dynamic:true }))
/////
  let startgun = await eco.get(`${server}.${user}.startgun`);
  if(startgun > 0) startgun = message.channel.send("https://media.discordapp.net/attachments/528310273761607693/990323029315846154/unknown.png?width=43&height=43")
/////
  let makarov = await eco.get(`${server}.${user}.makarov`);
  if(makarov > 0) makarov = message.channel.send("https://media.discordapp.net/attachments/866310329255854100/990322909627162704/era_icon-bitzsam-makarov.png?width=26&height=26")
/////
   let mk23 = await eco.get(`${server}.${user}.mk23`);
  if(mk23 > 0) mk23 = message.channel.send("https://media.discordapp.net/attachments/528310273761607693/990325071191101450/unknown.png?width=43&height=43")
    /////
   let glock18 = await eco.get(`${server}.${user}.glock18`);
  if(glock18 > 0) glock18 = message.channel.send("https://media.discordapp.net/attachments/528310273761607693/990325963931926608/unknown.png?width=43&height=43")
    /////
   let k180 = await eco.get(`${server}.${user}.k180`);
  if(k180 > 0) k180 = message.channel.send("https://media.discordapp.net/attachments/528310273761607693/990326526035787826/unknown.png?width=29&height=29")
    /////
   let m1911silver = await eco.get(`${server}.${user}.m1911silver`);
  if(m1911silver > 0) m1911silver = message.channel.send("https://media.discordapp.net/attachments/528310273761607693/990327735685627974/unknown.png?width=29&height=29")
      /////
   let gsocom = await eco.get(`${server}.${user}.gsocom`);
  if(gsocom > 0) gsocom = message.channel.send("https://media.discordapp.net/attachments/528310273761607693/990324482277269504/era_icon-gsocom.png?width=40&height=40")
 /////
   let m91 = await eco.get(`${server}.${user}.m91`);
  if(m91 > 0) m91 = message.channel.send("https://media.discordapp.net/attachments/528310273761607693/990324582210732042/era_icon2-m91.png?width=36&height=36")
 /////
   let magnum44 = await eco.get(`${server}.${user}.magnum44`);
  if(magnum44 > 0) magnum44 = message.channel.send("https://media.discordapp.net/attachments/528310273761607693/990328553763635210/unknown.png?width=43&height=43")
 /////
   let colt6 = await eco.get(`${server}.${user}.colt6`);
  if(colt6 > 0) colt6 = message.channel.send("https://media.discordapp.net/attachments/528310273761607693/990329581988900894/unknown.png?width=35&height=19")
     /////
   let streetshotgun = await eco.get(`${server}.${user}.streetshotgun`);
  if(streetshotgun > 0) streetshotgun = message.channel.send("https://media.discordapp.net/attachments/528310273761607693/990324582449823765/era_streetsawedshotgun-icon.gif?width=36&height=36")

  

  
  
  
 
  
    

      
    message.channel.send(`<:locking:987799419065876510> Fin <:locking:987799419065876510>`)

  
  }   
}
