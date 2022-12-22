const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");




module.exports = class sacarall extends Comandos {
  constructor() {
    super('sacarall', 'Economy', [""]);
  }

  
  

async run(client, message, args){


    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  
   const money = await eco.get(`${user}.banco`)    
    
  
  {
  let money = await eco.get(`${user}.banco`) || 0
    console.log(money)
    if(money < 1)return message.channel.send("banco Insuficiente! <:emoji_53:1017943320971984917>  ")
  }//Sirve para poner tienes menos de 1 vida 

    let random = Math.floor(Math.random()  + money)
    console.log("se ha agregado " + random + " a la cuenta de " + user)

  

    const embed = new Discord.MessageEmbed()

      .setAuthor("Sacaste todo de tu banco")
      .setDescription("Sacaste del banco <:emoji_53:1017943320971984917>  " + random)
      .setColor("RED")
      
       
  
    await eco.sumar(`${user}.efectivo`, random)

  eco.restar(`${user}.banco`, random)

    message.channel.send(embed)

  
}}