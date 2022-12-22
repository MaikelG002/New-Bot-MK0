const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let armas = new megadb.crearDB("armas");
let upload1 = new megadb.crearDB("upload");



module.exports = class pistolas extends Comandos {
  constructor() {
    super('invarmas', 'Economy', [""]);
  }

async run(client, message, args){

 

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(!armas.tiene(`${user}`)){
      armas.establecer(`${user}`,{
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
   ioncarbine: 0,
   dragonbreath: 0,
   launchergranade: 0
      })
    };



  ///////// constante nombramiento/////

  let startgun = await armas.get(`${user}.startgun`)
  
  let makarov = await armas.get(`${user}.makarov`)
  
  let mk23 = await armas.get(`${user}.mk23`)
  
  let glock18 = await armas.get(`${user}.glock18`)

  let k180 = await armas.get(`${user}.k180`)

  let m1911silver = await armas.get(`${user}.m1911silver`)

  let gsocom = await armas.get(`${user}.gsocom`)

  let m91 = await armas.get(`${user}.m91`)

  let magnum44 = await armas.get(`${user}.magnum44`)
  
  let colt6 = await armas.get(`${user}.colt6`)

  let streetshotgun = await armas.get(`${user}.streetshotgun`)

  let dragonbreath = await armas.get(`${user}.dragonbreath`)

  let dragonrifle = await armas.get(`${user}.dragonrifle`)

  let RNGAR = await armas.get(`${user}.RNG-19 AR`)

  let healgun = await armas.get(`${user}.healgun`)

  let launcher = await armas.get(`${user}.launchergranade`)


  

  let Description;

  if(startgun > 0) {
    Description = `<:Startgun:992906983848022117> **Startgun** ` 
  }
  
  if(makarov > 0) {
    if(Description) {
      Description = Description+"\n"+`<:Makarov:992907607712989264> **Makarov** ` 
    } else {
      Description = `<:Makarov:992907607712989264> **Makarov** ` 
    }
  }

  if(mk23 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:Mk23:992907667909656726> **Mk23** ` 
    } else {
      Description = `<:Mk23:992907667909656726> **Mk23** ` 
    }
  }

  if(glock18 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:Glock18:992907748763258901> **Glock18** ` 
    } else {
      Description = `<:Glock18:992907748763258901> **Glock18** ` 
    }
  }

  if(k180 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:K180:992907857232142427> **K180** ` 
    } else {
      Description = `<:K180:992907857232142427> **K180** ` 
    }
  }

  if(m1911silver > 0) {
    if(Description) {
      Description = Description+"\n"+`<:M1911silver:992907907588952184> **M1911silver** ` 
    } else {
      Description = `<:M1911silver:992907907588952184> **M1911silver** ` 
    }
  }

   if(gsocom > 0) {
    if(Description) {
      Description = Description+"\n"+`<:Gsocom:992907956851048458> **Gsocom** ` 
    } else {
      Description = `<:Gsocom:992907956851048458> **Gsocom** ` 
    }
  }

  if(m91 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:M91:992908005299470486> **M91** ` 
    } else {
      Description = `<:M91:992908005299470486> **M91** ` 
    }
  }

  if(magnum44 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:44magnum:992904902114291742> **4Magnum** ` 
    } else {
      Description = `<:44magnum:992904902114291742> **44Magnum** ` 
    }
  }

   if(colt6 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:Colt6:992908058185449522> **Colt6** ` 
    } else {
      Description = `<:Colt6:992908058185449522> **Colt6** ` 
    }
  }

   if(streetshotgun > 0) {
    if(Description) {
      Description = Description+"\n"+`<:StreetShotgun:992908092759097455> **Streetshotgun** ` 
    } else {
      Description = `<:StreetShotgun:992908092759097455> **Streetshotgun** ` 
    }
  }

  if(dragonbreath > 0) {
    if(Description) {
      Description = Description+"\n"+`**Dragonbreath(Auction)** ` 
    } else {
      Description = `**Dragonbreath(Auction)**` 
    }
  }

  if(dragonrifle > 0) {
    if(Description) {
      Description = Description+"\n"+`**DragonRifle(Auction)** ` 
    } else {
      Description = `**DragonRifle(Auction)**` 
    }
  }

  if(RNGAR > 0) {
    if(Description) {
      Description = Description+"\n"+`**RNG-19 AR(Evento)** ` 
    } else {
      Description = `**RNG-19 AR(Evento)**` 
    }
  }

  if(healgun > 0) {
    if(Description) {
      Description = Description+"\n"+`**<:eventcoin:987007503596417065> HealGun(Event House)** ` 
    } else {
      Description = `**<:eventcoin:987007503596417065> HealGun(Event House)**` 
    }
  }

  if(launcher > 0) {
    if(Description) {
      Description = Description+"\n"+`**<:eventcoin:987007503596417065> Launcher Granade(Event House)** ` 
    } else {
      Description = `**<:eventcoin:987007503596417065> Launcher Granade(Event House)**` 
    }
  }


  
  
   
  if(!Description) {
    Description = "NADA"
  }

  
  ///////////////invent//////////

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Inventario:")
/////////Se coloca el item para que se vea////

        

         .setDescription(Description)

          

        
          
        .setColor("GREEN")
        .setThumbnail("https://media.discordapp.net/attachments/866310329255854100/992983983069614090/era_hoyt_battleroyale_bag_level3.png")
        .setFooter("Comando By MaikelG")

      
      
      
        return message.channel.send(solonumeros)

     
    }
  }
}