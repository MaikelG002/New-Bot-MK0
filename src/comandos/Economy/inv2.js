const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let armas = new megadb.crearDB("armas");




module.exports = class inv2 extends Comandos {
  constructor() {
    super('inv2', 'Economy', [""]);
  }

async run(client, message, args){

 

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

   


  ///////// constante nombramiento/////

  let pescado1 = await eco.get(`${user}.pescado1`)
  
  let pescado2 = await eco.get(`${user}.pescado2`)
  
  let pescado3 = await eco.get(`${user}.pescado3`)
  
  let pescado4 = await eco.get(`${user}.pescado4`)

   let iron = await eco.get(`${user}.iron`)

   let silver = await eco.get(`${user}.silver`)

   let sapphire = await eco.get(`${user}.sapphire`)

   let ruby = await eco.get(`${user}.ruby`)

   let gold = await eco.get(`${user}.gold`)

   let emerald = await eco.get(`${user}.emerald`)

   let diamond = await eco.get(`${user}.diamond`)

  

  

  let Description;

  if(pescado1 > 0) {
    Description = `<:fishbass:976231075510632538> **FishBass 100/** ` + pescado1
  }
  
  if(pescado2 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:fishred:976231751535964190> **FishRed 250/** ` + pescado2
    } else {
      Description = `<:fishred:976231751535964190> **FishRed 250/** ` + pescado2
    }
  }
  
  if(pescado3 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:fishperch:976231833597534278> **FishPerch 500/** ` + pescado3
    } else {
      Description = `<:fishperch:976231833597534278> **FishPerch 500/** ` + pescado3
    }
  }
  
  if(pescado4 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:fishtuna:976231798885466223> **FishTuna 850/** ` + pescado4
    } else {
      Description = `<:fishtuna:976231798885466223> **FishTuna 850/** ` + pescado4
    }
  }

  if(iron > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_40:1001887319458066432> **iron x** ` + iron
    } else {
      Description = `<:emoji_40:1001887319458066432> **Iron x** ` + iron
    }
  }

  if(silver > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_41:1001887366027431986> **iron x** ` + silver
    } else {
      Description = `<:emoji_41:1001887366027431986> **Silver x** ` + silver
    }
  }

  if(sapphire > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_42:1001887471308656781> **Sapphire x** ` + sapphire
    } else {
      Description = `<:emoji_42:1001887471308656781> **Sapphire x** ` + sapphire
    }
  }

  if(ruby > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_43:1001887505689362522> **Ruby x** ` + ruby
    } else {
      Description = `<:emoji_43:1001887505689362522> **Ruby x** ` + ruby
    }
  }

   if(gold > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_44:1001887537201156249> **Gold x** ` + gold
    } else {
      Description = `<:emoji_44:1001887537201156249> **Gold x** ` + gold
    }
  }

  if(emerald > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_45:1001887585385316413> **Emerald x** ` + emerald
    } else {
      Description = `<:emoji_45:1001887585385316413> **Emerald x** ` + emerald
    }
  }

   if(diamond > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_46:1001887644260774039> **Diamond x** ` + diamond
    } else {
      Description = `<:emoji_46:1001887644260774039> **Diamond x** ` + diamond
    }
  }
  
  
  if(!Description) {
    Description = "NADA"
  }

  
  ///////////////invent//////////

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Inventario 2:")
/////////Se coloca el item para que se vea////

        

         .setDescription(Description)

          

        
          
        .setColor("RED")
        .setThumbnail("https://i.imgur.com/lgm8IcZ.png")
        .setFooter("Comando By MaikelG")

      
      
      
        return message.channel.send(solonumeros)

     
    }
  }
}