const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const talkedRecently = new Set();
const CDDB = new megadb.crearDB("cooldowns")
 



module.exports = class work extends Comandos {
  constructor() {
    super('work', 'Economy', ["work"]);
  }

async run(client, message, args){


  //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (work.cooldown || 3) * 1000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".work")) {
        const timestamps = await cooldowns.get(message.author.id+".work")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 1000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 3s Para Poder Usar El Comando \`${work.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".work", now)
        setTimeout(() => cooldowns.delete(message.author.id+".work"), cooldownAmount)
  //Termina Cooldown//
      
  
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

 {
  let ban = await eco.get(`${user}.ban`)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }
  
//Agregar variables abajos para los nuevos, y lo que ya estan agregar la variable desde economia.json
    if(!eco.tiene(`${user}.efectivo`)){
        eco.establecer(`${user}`,{
          vida: 100, 
          efectivo: 0,
          banco: 0,
          chaleco: 0,
          caña: 0,
          coins: 0,
          peal: 0,
          minerales: 0,
          caja: 0,
          vip: 0,
          pala: 0,
          eventcoin: 0,
          exoticoin: 0,
          gusanos: 0,
          pescado1: 0,
          pescado2: 0,
          pescado3: 0,
          pescado4: 0,
          ejemplo1: 0,
          ex: 0,
          tronco: 0,
          hacha: 500,
          dinamita: 0,
          construccion1: 0,
          construccion2: 0,
          plasmacoin: 0,
          lasercoin: 0,
          tickets: 0,
          gangcoin: 0,
          reparacionhacha: 0,
          hamburguesa: 50,
          hotdog: 50,
          celular: 0,
          uploadcoin: 0,
          drill: 0,
          ban: 0,
          ticketsvip: 0,
          boost: 0,
          multicolorcoin: 0,
          palaevent: 0,
          muertes: 0,
          telefono: 100,
          coingame: 0

        }); 
    }

  
  {
  let money = await eco.get(`${user}.vida`) || 0
    
    if(money < 1)return message.channel.send("Energia Insuficiente!")
  }//Sirve para poner tienes menos de 1 vida 

    var random = Math.floor(Math.random() * 450)
    console.log("Uso el comando !work y gano" + random + "en la cuenta de" + usuario)

    const embed = new Discord.MessageEmbed()

    .setAuthor("Trabajaste")
    .setDescription(" Y conseguiste <:era_petzmoney1:1017944727271768065>"+ random)
    .setColor("GREEN")

  

    await eco.sumar(`${user}.efectivo`, random)

    message.channel.send(embed)
{
   let random = Math.floor(Math.random() * (0 - 13)) + 13// Te da numeros del 0 al 200 se puede cambiar//
    
     
   eco.restar(`${user}.vida`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

 
  }
  {
  {
  let ex = await eco.get(`${user}.ex`) || 0
    
    if(ex > 999)return message.channel.send("<:EX:987128715106459649> Alcansaste 999 de Experiencia <:EX:987128715106459649>")
  }//Sirve para poner tienes menos de 1 vida 

    let random = Math.floor(Math.random() * (1 - 12)) + 12
  
 
  
    await eco.sumar(`${user}.ex`, random)}
}
  
}