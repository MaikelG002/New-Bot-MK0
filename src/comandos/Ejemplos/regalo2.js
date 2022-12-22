const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");




module.exports = class regalo2 extends Comandos {
  constructor() {
    super('', 'Ejemplos', [""]);
  }

  
  

async run(client, message, args){

//Cooldown system by MaikelG//
      const { cooldowns } = client;
      if (!cooldowns.has(regalo2.name)) {
        cooldowns.set(regalo2.name, new Map());
      }
    
      const now = Date.now();
      const timestamps = cooldowns.get(regalo2.name);
      const cooldownAmount = (regalo2.cooldown || 86400) * 3000;
    
      if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Para Poder Usar El Comando \`${regalo2.name}\` `);
          } catch (e) { console.log(e) }
        }
      }
    
      timestamps.set(message.author.id, now);
      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  //Termina Cooldown//
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

     
    const embed = new Discord.MessageEmbed()

      .setTitle("Box Gift")
      .setDescription("**El Servidor te Premia con $10,000 <:Gralats:874761923114205194> Con el Codigo !#freegift**") 
        .setColor("YELLOW")
        .setFooter("Vence 06/06/2022 6:00 AM")
        .setImage("https://cdn.discordapp.com/attachments/971245334221193247/983165155221340220/descargaui.png")
    
    

    message.channel.send(embed)

  {
   var random1 = Math.floor(10000)
    
     
eco.sumar(`${user}.efectivo`, random1)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }
  
}}