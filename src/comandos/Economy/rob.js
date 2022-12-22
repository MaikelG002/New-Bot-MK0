const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")

module.exports = class rob extends Comandos {
  constructor() {
    super('rob', 'Economy', [""]);
  }

async run(client, message, args){

  //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (rob.cooldown || 60) * 3000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".rob")) {
        const timestamps = await cooldowns.get(message.author.id+".rob")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 60s Para Poder Usar El Comando \`${rob.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".rob", now)
        setTimeout(() => cooldowns.delete(message.author.id+".rob"), cooldownAmount)
  //Termina Cooldown//

  let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  {
  let ban = await eco.get(`${user}.ban`)
    console.log(ban)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }
  
  const member = message.mentions.members.first();


  if(!member) return message.channel.send(`:x: Menciona a un usuario para robarle el efectivo `);
     
  if(member.id === user) return message.channel.send(`:x: No te puedes robar a ti mismo `)
     
     const dinero_robar = await eco.obtener(`${member.id}` + `.efectivo`);
     
     if(dinero_robar < 1){
       	return message.channel.send(`Este usuario tiene menos de <:era_petzmoney1:1017944727271768065> 0 Gralats, No le puedes robar`);
     }

    const timer = Math.floor(Math.random() * 200) + 1; //Este 'timer' es para el logrado y fallido
  
    const random_dinero =  Math.floor(Math.random() * (0 - dinero_robar)) + dinero_robar// Te da numeros del 0 al 200 se puede cambiar// //En mi caso va a ganar un random de 1 a 20
//AcÃ¡ hago aclaraciÃ³n del '(20 + 0) + 1)' Resulta que el 'Random' empieza a ganar desde 0. En este caso al momento de poner un '!rob @usuario' este puede llegar a ganar '0'. Con esto sumamos 20 + 0 + 1 = 200
    if(timer < 100){
      //GANA
      message.channel.send(`:white_check_mark: ${message.author} Robaste a ${member} y Ganaste <:era_petzmoney1:1017944727271768065>  ${random_dinero} Gralats`); //Mandamos mensaje claramente.
      eco.sumar(`${message.author.id}.efectivo`, random_dinero); //Sumamos el dinero que robo

      eco.restar(`${member.id}.efectivo`, random_dinero)
    } else {
      //PIERDE
      message.channel.send(`:x: ${message.author} Intentaste robar a ${member} y no lo lograste, Perdiste <:era_petzmoney1:1017944727271768065> ${random_dinero} Gralats `); //Lo de 'perdiÃ³ ${random_dinero}' lo pueden quitar (Es solo un ejemplo claro)
      eco.restar(`${message.author.id}.efectivo`, random_dinero) //Como dije arriba, lo pueden quitar

    
  
    }

  
     
   }
}