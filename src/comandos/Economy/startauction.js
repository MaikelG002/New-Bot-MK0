const Comandos = require('../../util/estructuras/Comandos');
const discord = require("discord.js")
const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const ms = require("ms")
const CDDB = new megadb.crearDB("cooldowns")


module.exports = class startauction extends Comandos {
  constructor() {
    super('startauction', 'Economy', [""]);
  }

  async run (client, message, args) {

    

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    let tiempo = ['20m', '21m', '30m', '35m', '30m', '28m', '26m', '31m', '32m', '24m']

    
     const time = tiempo[Math.floor(Math.random() * tiempo.length)];
    console.log(time)

  if(!time)return message.reply("Cuantas Horas minutos o segundos")
  if(ms(time) > ms("1d"))return message.reply("Superaste el limite de 1 dia")
  
  


    const reason = ['Comienza la Subasta']
  
  const embed = new discord.MessageEmbed()
  .setAuthor(`${message.author.tag} Auction iniciada`,message.author.displayAvatarURL())
  .setColor("#FF8000")
  .setDescription(`__Subasta__:
  Escribe !pay (Cantidad)`)
  .setTimestamp()
  message.channel.send(embed)
  
  setTimeout(() => {
     
    
    const embed = new discord.MessageEmbed()
  .setAuthor(`${message.author.tag} Auction Terminada`,message.author.displayAvatarURL())
  .setColor("#FF8000")
  .setDescription(`__Subasta__:
  Se Termino la subasta El, Mensaje anterior a este texto A Ganado la subasta`)
  .setTimestamp()
    message.channel.send(embed)



  }, ms(time))
  

  }
}