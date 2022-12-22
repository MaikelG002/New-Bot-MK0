const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let armas = new megadb.crearDB("armas");
const CDDB = new megadb.crearDB("cooldowns")


module.exports = class sumer extends Comandos {
  
constructor() {
    super(`summer`, 'Economy', [""])
      ; 
  }
  


async run(client, message, args){


    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  let ex1 = await eco.get(`${user}.multicolorcoin`) || 0
    console.log(ex1)
    if(ex1 < 500)return message.channel.send(`<:emoji_49:1008052528207904808> MulticolorCoin Insuficiente! Necesita 500 Tienes ${+ ex1} <:emoji_49:1008052528207904808>`)

    

  if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("<:emoji_49:1008052528207904808> Recompensas Summer <:emoji_49:1008052528207904808>")
        .setDescription(
`**Cambiaste 1000 MiltiColorCoin Por:**
1-) 1 **RNG-19 AR**
Y 1K Municion18`) 
        .setColor("RED")
          .setImage("https://cdn.discordapp.com/attachments/866310329255854100/1008052628397228132/era_sabrecucu-rng19ar-icon.png")
        .setFooter("Comando By MaikelG")

    {
   var random0 = Math.floor(500)

        eco.restar(`${user}.multicolorcoin`, random0)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }
    {
   var random1 = Math.floor(1)

        armas.sumar(`${user}.RNG-19 AR`, random1)

  }

    {
   var random2 = Math.floor(1000)

        armas.sumar(`${user}.municion18`, random2)

  }


        
    return message.channel.send(solonumeros)
    }
 }
}