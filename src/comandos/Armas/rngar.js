const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let armas = new megadb.crearDB("armas");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")

module.exports = class rngar extends Comandos {
  constructor() {
    super('rng-19', 'Armas', [""]);
  }

async run(client, message, args){

   
 
      //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (rngar.cooldown || 1) * 7000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".RNG-19 AR")) {
        const timestamps = await cooldowns.get(message.author.id+".RNG-19 AR")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 7000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 1.7s Para Poder Usar El Comando \`${rngar.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".RNG-19 AR", now)
        setTimeout(() => cooldowns.delete(message.author.id+".RNG-19 AR"), cooldownAmount)
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


  if(!member) return message.channel.send(` Menciona a un usuario`)

  
     
  {
   let rngar = await armas.obtener(`${message.author.id}.RNG-19 AR`) || 0
    console.log(rngar)
    if(rngar < 1) return message.channel.send("<:locking:987799419065876510> No tiene la RNG-19 AR <:locking:987799419065876510>")}

  {
   let vida = await eco.obtener(`${message.author.id}.vida`) || 0
    console.log(vida)
    if(vida < 1) return message.channel.send("<:locking:987799419065876510> Tienes 0 de vida  <:locking:987799419065876510>")}

 

  {
   let remat = await eco.obtener(`${member.id}.vida`) || 0
    console.log(remat)
    if(remat < 1)return message.channel.send("<:locking:987799419065876510> El jugador se encuentra muerto, Te Dineron 5 de Energia <:locking:987799419065876510>")
    
   let random102 = Math.floor(5)    
  eco.sumar(`${user}.vida`, random102)
   eco1.obtener(`${member.id}` + `.muertes`)

    let kil = Math.floor(1) 

    eco1.sumar(`${message.author.id}.muertes`, kil)
  }
  
    eco.obtener(`${member.id}` + `.vida`)

   
    let random = Math.floor(Math.random() * (10 - 11)) + 11   
  eco.restar(`${member.id}.vida`, random)

   let random100 = Math.floor(Math.random() * (10 - 25)) + 25  
  armas.restar(`${user}.municion18`, random100)




      if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Disparaste")
        .setDescription(`:white_check_mark: ${message.author} Le disparaste a ${member}  Le quitaste <:energia:985182546595827782> ${random} de vida y perdiste ${random100} De Ammo18`) 
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")
        .setImage("https://cdn.discordapp.com/attachments/866310329255854100/1008052628397228132/era_sabrecucu-rng19ar-icon.png")
        
        return message.channel.send(solonumeros)
    };
  
 }
}