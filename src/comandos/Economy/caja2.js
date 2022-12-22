const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class caja2 extends Comandos {
  constructor() {
    super('caja', 'Economy', [""]);
  }

async run(client, message, args){


    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  
  let cajas = Math.floor(Math.random() * (1 - 7)) + 7;


  if(cajas === 1) 
    {
      {
       let caja1 = await eco.get(`${user}.caja`) || 0
    
    if(caja1 < 1)return message.channel.send("<:locking:987799419065876510> Caja insuficiente")
      }

      let random1 = Math.floor(Math.random() * (5 - 30)) + 30

      eco.sumar(`${user}.vida`, random1)   

      let random100 = Math.floor(1)

      eco.restar(`${user}.caja`, random100)

        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Abriste una caja con objetos random")
        .setDescription(`Y Ganaste <:energia:985182546595827782>  ${random1} Energia`) 
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")

        return message.channel.send(solonumeros)
      
    }
  
   if(cajas === 2) 
     {
     
      {
       let caja1 = await eco.get(`${user}.caja`) || 0
    
    if(caja1 < 1)return message.channel.send("<:locking:987799419065876510> Caja insuficiente")
      }

      let random1 = Math.floor(Math.random() * (5 - 45)) + 45

      eco.sumar(`${user}.chaleco`, random1)   

let random100 = Math.floor(1)

      eco.restar(`${user}.caja`, random100)
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Abriste una caja con objetos random")
        .setDescription(`Y Ganaste <:chaleco:985182587385442365> ${random1} Chalecos`) 
        .setColor("RED")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }
  
  if(cajas === 3) 
    {

      {
       let caja1 = await eco.get(`${user}.caja`) || 0
    
    if(caja1 < 1)return message.channel.send("<:locking:987799419065876510> Caja insuficiente")
      }

      let random1 = Math.floor(Math.random() * (10 - 65)) + 65

      eco.sumar(`${user}.tronco`, random1)   

let random100 = Math.floor(1)

      eco.restar(`${user}.caja`, random100)
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Abriste una caja con objetos random")
        .setDescription(`Y Ganaste <:emoji_31:992839401619066910> ${random1} Troncos`) 
        .setColor("#008f39")
        .setFooter("Comando By MaikelG")

        return message.channel.send(solonumeros)
      
    }
  
  if(cajas === 4)
    {
{
       let caja1 = await eco.get(`${user}.caja`) || 0
    
    if(caja1 < 1)return message.channel.send("<:locking:987799419065876510> Caja insuficiente")
      }      

      let random1 = Math.floor(Math.random() * (10 - 85)) + 85

      eco.sumar(`${user}.construccion2`, random1)   

      
let random100 = Math.floor(1)

      eco.restar(`${user}.caja`, random100)
    
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Abriste una caja con objetos random")
        .setDescription(`Y Ganaste <:emoji_33:992899412055564469> ${random1} Block`) 
        .setColor("#51d1f6")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }

  if(cajas === 5)
    {
{
       let caja1 = await eco.get(`${user}.caja`) || 0
    
    if(caja1 < 1)return message.channel.send("<:locking:987799419065876510> Caja insuficiente")
      }      

      let random1 = Math.floor(Math.random() * (10 - 100)) + 100

      eco.sumar(`${user}.municion9`, random1)   

      
let random100 = Math.floor(1)

      eco.restar(`${user}.caja`, random100)
    
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Abriste una caja con objetos random")
        .setDescription(`Y Ganaste <:emoji_25:992127713102024715> ${random1} Ammo9`) 
        .setColor("#51d1f6")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
        
    }

    if(cajas === 6)
    {
{
       let caja1 = await eco.get(`${user}.caja`) || 0
    
    if(caja1 < 1)return message.channel.send("<:locking:987799419065876510> Caja insuficiente")
      }      

      let random1 = Math.floor(Math.random() * (10 - 200)) + 200

      eco.sumar(`${user}.coingame`, random1)   

      
let random100 = Math.floor(1)

      eco.restar(`${user}.caja`, random100)
    
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Abriste una caja con objetos random")
        .setDescription(`Y Ganaste <:emoji_53:1016881594298023946> ${random1} Game Coin`) 
        .setColor("#51d1f6")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)

    }

    if(cajas === 7)
    {
{
       let caja1 = await eco.get(`${user}.caja`) || 0
    
    if(caja1 < 1)return message.channel.send("<:locking:987799419065876510> Caja insuficiente")
      }      

      let random1 = Math.floor(Math.random() * (100 - 1000)) + 1000

      eco.sumar(`${user}.efectivo`, random1)   

      
let random100 = Math.floor(1)

      eco.restar(`${user}.caja`, random100)
    
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Abriste una caja con objetos random")
        .setDescription(`Y Ganaste <:era_petzmoney1:1017944727271768065>  ${random1} Gralats`) 
        .setColor("#51d1f6")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)

    }

  }
}