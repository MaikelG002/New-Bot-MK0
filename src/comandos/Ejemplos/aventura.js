const Comandos = require('../../util/estructuras/Comandos');
const discord = require("discord.js")
const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const ms = require("ms")
const CDDB = new megadb.crearDB("cooldowns")


module.exports = class aventura extends Comandos {
  constructor() {
    super('aventura', 'Economy', [""]);
  }

  async run (client, message, args) {

    //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (aventura.cooldown || 18000) * 1000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".aventura")) {
        const timestamps = await cooldowns.get(message.author.id+".aventura")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 1000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Para Poder Usar El Comando Aprox... 5 Horas \`${aventura.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".aventura", now)
        setTimeout(() => cooldowns.delete(message.author.id+".aventura"), cooldownAmount)
  //Termina Cooldown//

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    {
  let ban = await eco.get(`${user}.ban`)
    console.log(ban)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }

    let tiempo = ['20m', '35m', '30m', '20s', '40m', '60s', '10s', '60s', '10m', '25m']

     const time = tiempo[Math.floor(Math.random() * tiempo.length)];
    

  if(!time)return message.reply("Cuantas Horas minutos o segundos")
  if(ms(time) > ms("1d"))return message.reply("Superaste el limite de 1 dia")
  
  
  let reason1 = ['Un noob, Te disparo, y se fue corriendo ve alcanzalo y quitale su dinero', 'Un pro player te reto a un vs el que gane, Se lleva el dinero', 'Te pusiste a cabar tro, y en un rato lo vendes', 'Mataste a un admin regresa ahorita y te daran una recompensa', 'Minaste minerales y lo vendiste espera unos segundos mientras se procesa los materiales', 'Trabajaste de pizzero espera a que cobres']

    const reason = reason1[Math.floor(Math.random() * reason1.length)];
  
  const embed = new discord.MessageEmbed()
  .setAuthor(`${message.author.tag} Aventura iniciada`,message.author.displayAvatarURL())
  .setColor("#FF8000")
  .setDescription(`__Tiempo__: \`${time}\`\n__Aventura__: \`${reason}\``)
  .setTimestamp()
  message.channel.send(embed)
  
  setTimeout(() => {
     let random = Math.floor(Math.random() * (500 - 5000)) + 5000// Te da numeros del 0 al 200 se puede cambiar//
  eco.sumar(`${user}.efectivo`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
    
    const embed = new discord.MessageEmbed()
  .setAuthor(`${message.author.tag} Aventura Terminada`,message.author.displayAvatarURL())
  .setColor("#FF8000")
  .setDescription(`__Tiempo__: \`${time}\`\n__Aventura__: \`${reason}\`\n__Premios__: <:money:985183013816115300>\`$${random} Gralats\`\n__Aventura servidor__: \`${message.guild.name}\``)
  .setTimestamp()
  message.author.send(embed)
    message.channel.send(embed)



  }, ms(time))
  
  // You Can modified the command whatever you want 

  }
}