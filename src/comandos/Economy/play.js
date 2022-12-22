const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")

module.exports = class play extends Comandos {
  constructor() {
    super('play', 'Economy', [""]);
  }

async run(client, message, args){

  //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (play.cooldown || 2) * 3000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".play")) {
        const timestamps = await cooldowns.get(message.author.id+".play")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 24s Para Poder Usar El Comando \`${play.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".play", now)
        setTimeout(() => cooldowns.delete(message.author.id+".play"), cooldownAmount)
  //Termina Cooldown//

  let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  {
  let ban = await eco.get(`${user}.ban`)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }
  

  {
    let telefono = await eco.get(`${user}.telefono`) || 0
      if(telefono < 0)return message.channel.send(`**»** <:emoji_28:992127867938930739> Se agoto la beteria del movil ${telefono}% `)
    }//Sirve para poner tienes menos de 1 vida 
     
     const dinero_robar = await eco.obtener(`${user}` + `.efectivo`);

     eco.obtener(`${user}` + `.coingame`)
     
     if(dinero_robar < 1){
       	return message.channel.send(`**»** Tienes 0 Gralats no puedes jugar`);
     }
     const perdiste = Math.floor(Math.random() * (50 - 500)) + 500;
    const timer = Math.floor(Math.random() * 200) + 1; //Este 'timer' es para el logrado y fallido
  
    const random_dinero = Math.floor(Math.random() * (10 - 100)) + 100; // Te da numeros del 0 al 200 se puede cambiar// //En mi caso va a ganar un random de 1 a 20
//AcÃ¡ hago aclaraciÃ³n del '(20 + 0) + 1)' Resulta que el 'Random' empieza a ganar desde 0. En este caso al momento de poner un '!rob @usuario' este puede llegar a ganar '0'. Con esto sumamos 20 + 0 + 1 = 200
    if(timer < 100){
      //GANA
      message.channel.send(`**»** Ganaste ${random_dinero} <:emoji_53:1016881594298023946> Game Coin `); //Mandamos mensaje claramente.
      eco.sumar(`${user}.coingame`, random_dinero); //Sumamos el dinero que robo.
    } else {
      //PIERDE
      message.channel.send(`${message.author} **»** Jugaste pero No lo conseguiste, Perdiste <:era_petzmoney1:1017944727271768065>  ${perdiste} Gralats `); //Lo de 'perdiÃ³ ${random_dinero}' lo pueden quitar (Es solo un ejemplo claro)
      eco.restar(`${user}.efectivo`, perdiste) //Como dije arriba, lo pueden quitar

    
  
    }

    {
      
          let random = Math.floor(Math.random() * (2 - 10)) + 10
          console.log("Se le descargo la bateria en un" + random + "% en la cuenta de " + usuario)
      
          await eco.restar(`${user}.telefono`, random)}

  
     
   }
}