const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");




module.exports = class depall extends Comandos {
  constructor() {
    super('depall', 'Economy', [""]);
  }

  
  

async run(client, message, args){


    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  
   const money = await eco.get(`${user}.efectivo`)    
    
  
  {
  let money = await eco.get(`${user}.efectivo`) || 0
    console.log(money)
    if(money < 1)return message.channel.send("efectivo Insuficiente! <:emoji_53:1017943320971984917>  ")
  }//Sirve para poner tienes menos de 1 vida 

    let random = Math.floor(Math.random()  + money)
    console.log("se ha Depositado"  + random + " a la cuenta de " + usuario)

  

    const embed = new Discord.MessageEmbed()

      .setAuthor("Depositaste todo tu efectivo")
      .setDescription("Depositaste al banco  <:era_petzmoney1:1017944727271768065> " + random)
      .setColor("RED")
      
       
  
    await eco.sumar(`${user}.banco`, random)

  eco.restar(`${user}.efectivo`, random)

    message.channel.send(embed)

  
}}