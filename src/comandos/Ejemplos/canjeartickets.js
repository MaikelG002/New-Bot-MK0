const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class canjeartickets extends Comandos {
  constructor() {
    super('canjeartickets', 'Economy', [""]);
  }

async run(client, message, args){


    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  
  let cajas = Math.floor(Math.random() * (1 - 5)) + 5;


  if(cajas === 1) 
    {
      {
       let caja1 = await eco.get(`${user}.ticketsvip`) || 0
    
    if(caja1 < 10)return message.channel.send("<:locking:987799419065876510> TicketsVip insuficiente Necesitas +10")
      }

      let random1 = Math.floor(1)

      eco.sumar(`${user}.eventcoin`, random1)   

      let random100 = Math.floor(10)

      eco.restar(`${user}.ticketsvip`, random100)

        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Canjeaste 10 Tickets Por coins Random")
        .setDescription(`Y Ganaste <:eventcoin:987007503596417065>   ${random1} Event coin`) 
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")

        return message.channel.send(solonumeros)
      
    }
  
   if(cajas === 2) 
   {
    {
     let caja2 = await eco.get(`${user}.ticketsvip`) || 0
  
  if(caja2 < 10)return message.channel.send("<:locking:987799419065876510> TicketsVip insuficiente")
    }

    let random2 = Math.floor(1)

    eco.sumar(`${user}.eventcoin`, random2)   

    let random102 = Math.floor(10)

    eco.restar(`${user}.ticketsvip`, random102)

      let solonumeros = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
      .setTitle("Canjeaste 10 TicketsVip Por coins Random")
      .setDescription(`Y Ganaste <:eventcoin:987007503596417065>   ${random2} Event coin`) 
      .setColor("BLUE")
      .setFooter("Comando By MaikelG")

      return message.channel.send(solonumeros)
      
    }
  
  if(cajas === 4) 
  {
    {
     let caja3 = await eco.get(`${user}.ticketsvip`) || 0
  
  if(caja3 < 10)return message.channel.send("<:locking:987799419065876510> TicketsVip insuficiente")
    }

    let random3 = Math.floor(1)

    eco.sumar(`${user}.exoticoin`, random3)   

    let random103 = Math.floor(10)

    eco.restar(`${user}.ticketsvip`, random100)

      let solonumeros = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
      .setTitle("Canjeaste 10 TicketsVip Por coins Random")
      .setDescription(`Y Ganaste <:emoji_52:1015439359736025118>   ${random3} Exotic Coin`) 
      .setColor("BLUE")
      .setFooter("Comando By MaikelG")

      return message.channel.send(solonumeros)
      
    }
  
  if(cajas === 3)
  {
    {
     let caja4 = await eco.get(`${user}.ticketsvip`) || 0
  
  if(caja4 < 10)return message.channel.send("<:locking:987799419065876510> TicketsVip insuficiente")
    }

    let random4 = Math.floor(1)

    eco.sumar(`${user}.eventcoin`, random4)   

    let random104 = Math.floor(10)

    eco.restar(`${user}.tickets`, random104)

      let solonumeros = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
      .setTitle("Canjeaste 10 TicketsVip Por coins Random")
      .setDescription(`Y Ganaste <:eventcoin:987007503596417065>   ${random4} Event coin`) 
      .setColor("BLUE")
      .setFooter("Comando By MaikelG")

      return message.channel.send(solonumeros)
      
    }

  if(cajas === 5)
  {
    {
     let caja5 = await eco.get(`${user}.ticketsvip`) || 0
  
  if(caja5 < 10)return message.channel.send("<:locking:987799419065876510> TicketsVip insuficiente")
    }

    let random5 = Math.floor(1)

    eco.sumar(`${user}.eventcoin`, random5)   

    let random105 = Math.floor(10)

    eco.restar(`${user}.ticketsvip`, random105)

      let solonumeros = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
      .setTitle("Canjeaste 10 TicketsVip Por coins Random")
      .setDescription(`Y Ganaste <:eventcoin:987007503596417065>   ${random5} Event coin`) 
      .setColor("BLUE")
      .setFooter("Comando By MaikelG")

      return message.channel.send(solonumeros)
      
    }

  }
}