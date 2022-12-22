const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class regalo extends Comandos {
  constructor() {
    super('', 'Ejemplos', [""]);
  }

async run(client, message, args){

  //Cooldown system by MaikelG//
      const { cooldowns } = client;
      if (!cooldowns.has(regalo.name)) {
        cooldowns.set(regalo.name, new Map());
      }
    
      const now = Date.now();
      const timestamps = cooldowns.get(regalo.name);
      const cooldownAmount = (regalo.cooldown || 0) * 3000;
    
      if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Para Poder Usar El Comando \`${regalo.name}\` `);
          } catch (e) { console.log(e) }
        }
      }
    
      timestamps.set(message.author.id, now);
      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  //Termina Cooldown//
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Box Gift")
        .setDescription("**El Servidor te Premia con $10,000 <:Gralats:874761923114205194> Con el Codigo !#freegift**") 
        .setColor("YELLOW")
        .setFooter("Vence 06/06/2022 6:00 AM")
        .setImage("https://cdn.discordapp.com/attachments/971245334221193247/983165155221340220/descargaui.png")

      
       

       eco.obtener(`${user}.efectivo`)
      
      
   var random = Math.floor(1)

        eco.sumar(`${user}.efectivo`, random)

   return message.channel.send(solonumeros)
      
    }
  
  
  }
}