const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")


module.exports = class cavar1 extends Comandos {
  constructor() {
    super('', 'Economy', [""]);
  }

  

async run(client, message, args){

    
  //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (cavar1.cooldown || 1) * 5000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".cavar1")) {
        const timestamps = await cooldowns.get(message.author.id+".cavar1")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 5000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 1.5s Para Poder Usar El Comando \`${cavar1.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".cavar1", now)
        setTimeout(() => cooldowns.delete(message.author.id+".cavar1"), cooldownAmount)
  //Termina Cooldown//

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  {
  let ban = await eco.get(`${user}.ban`)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }
  
    if(!eco.tiene(`${user}.efectivo`)){
        eco.establecer(`${user}`,{vida: "0" , efectivo: "0" , banco: "0"}); 
    
    }

  {
  let money2 = await eco.get(`${user}.multicolorcoin`) || 0
    if(money2 > 500)return message.channel.send("Conseguiste La **RNG-19 AR** Canjealo con el comando `!summer`")
  }
  
  {
  let money = await eco.get(`${user}.palaevent`) || 0
    if(money < 1)return message.channel.send("Pala-Event Insuficiente!")
  }

  const timer = Math.floor(Math.random() * 200) + 1; //Este 'timer' es para el logrado y fallido
  
    const random_dinero =  Math.floor(Math.random() * (1 - 10)) + 10

  const Quitarpala =  Math.floor(Math.random() * (10 - 20)) + 20
  // Te da numeros del 0 al 200 se puede cambiar// //En mi caso va a ganar un random de 1 a 20
//AcÃ¡ hago aclaraciÃ³n del '(20 + 0) + 1)' Resulta que el 'Random' empieza a ganar desde 0. En este caso al momento de poner un '!rob @usuario' este puede llegar a ganar '0'. Con esto sumamos 20 + 0 + 1 = 200
    if(timer < 100){
      //GANA
      message.channel.send(`${message.author} Cavaste y Ganaste <:emoji_49:1008052528207904808>  ${random_dinero} MultiColorCoin Y perdiste <:emoji_50:1008057997693567049> ${Quitarpala}% De la Pala`); //Mandamos mensaje claramente.
      eco.sumar(`${user}.multicolorcoin`, random_dinero); //Sumamos el dinero que robo.

      eco.restar(`${user}.palaevent`, Quitarpala)
    } else {
      //PIERDE
      message.channel.send(`${message.author} Intentaste Cavar pero fallaste no cavaste nada Perdiste <:emoji_50:1008057997693567049> ${Quitarpala} Palas`); //Lo de 'perdiÃ³ ${random_dinero}' lo pueden quitar (Es solo un ejemplo claro)
      eco.restar(`${user}.palaevent`, Quitarpala) //Como dije arriba, lo pueden quitar

 
    }
  
 }
}