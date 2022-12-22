const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")




module.exports = class daily extends Comandos {
  constructor() {
    super('daily', 'Economy', [""]);
  }

  
  

async run(client, message, args){

//Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (daily.cooldown || 43200) * 1000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".daily")) {
        const timestamps = await cooldowns.get(message.author.id+".daily")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 1000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Para Poder Usar El Comando \`${daily.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".daily", now)
        setTimeout(() => cooldowns.delete(message.author.id+".daily"), cooldownAmount)
  //Termina Cooldown//
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  {
  let ban = await eco.get(`${user}.ban`)
    console.log(ban)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }
     
    const embed = new Discord.MessageEmbed()

      .setTitle("<:caja:985182290516779068> Recompensas Diarias <:caja:985182290516779068>")
      .setDescription(`

Recibiste: 100 <:era_petzmoney1:1017944727271768065> Gralats
Recibiste: 1  <:caja:985182290516779068> Caja
Recibiste: 10 <:energia:985182546595827782> Energia
Recibiste: 100 <:emoji_28:992127867938930739>  Bateria`)
      .setColor("RED")
    
    

    message.channel.send(embed)

  {
   let random1 = Math.floor(10)
    
     
eco.sumar(`${user}.vida`, random1)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }

  {
   let random2 = Math.floor(100)
    
     
eco.sumar(`${user}.efectivo`, random2)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }

  {

    
    
   let random3 = Math.floor(1)
    
     
eco.sumar(`${user}.caja`, random3)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }

  {

    let bateria = await eco.get(`${user}.telefono`)
    if(bateria > 5)return message.channel.send("Tienes +100 De bateria")
    
    let random4 = Math.floor(100)
     
      
 eco.sumar(`${user}.telefono`, random4)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
 
   }
  
}}
