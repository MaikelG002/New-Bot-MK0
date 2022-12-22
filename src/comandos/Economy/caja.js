const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")



module.exports = class caja extends Comandos {
  constructor() {
    super('', 'Economy', [""]);
  }

  
  

async run(client, message, args){

//Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (caja.cooldown || 1) * 3000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".caja")) {
        const timestamps = await cooldowns.get(message.author.id+".caja")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 1s Para Poder Usar El Comando \`${caja.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".caja", now)
        setTimeout(() => cooldowns.delete(message.author.id+".caja"), cooldownAmount)
  //Termina Cooldown//
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  
    if(!eco.tiene(`${user}.chaleco`)){
        eco.establecer(`${user}`,{vida: "0" , efectivo: "0" , chaleco: "0"}); 
    
    }

  
  
  {
  let money = await eco.get(`${user}.caja`) || 0
    console.log(money)
    if(money < 1)return message.channel.send("Caja Insuficiente! <:caja:985182290516779068> ")
  }//Sirve para poner tienes menos de 1 vida 

    let random = Math.floor(Math.random() * 10)
    console.log("se ha agregado " + random + " a la cuenta de " + user)

  

    const embed = new Discord.MessageEmbed()

      .setAuthor("Abriste una caja con objetos random")
      .setDescription(" Conseguiste <:chaleco:985182587385442365> Chalecos " + random)
      .setColor("RED")
      
  
    await eco.sumar(`${user}.chaleco`, random)

    message.channel.send(embed)

  {
  var random3 = Math.floor(1)
    
     
   eco.restar(`${user}.caja`, random3)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }
  
}}