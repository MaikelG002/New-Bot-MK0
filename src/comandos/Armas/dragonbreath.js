const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("armas");
let eco1 = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")

module.exports = class dragonbreath extends Comandos {
  constructor() {
    super('dragonbreath', 'Armas', [""]);
  }

async run(client, message, args){

   
 
      //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (dragonbreath.cooldown || 3) * 3000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".dragonbreath")) {
        const timestamps = await cooldowns.get(message.author.id+".dragonbreath")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 3s Para Poder Usar El Comando \`${dragonbreath.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".dragonbreath", now)
        setTimeout(() => cooldowns.delete(message.author.id+".dragonbreath"), cooldownAmount)
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
   let dragonbreath = await eco.obtener(`${message.author.id}.dragonbreath`) || 0
    console.log(dragonbreath)
    if(dragonbreath < 1) return message.channel.send("<:locking:987799419065876510> No tiene la dragonbreath <:locking:987799419065876510>")}

  {
   let vida = await eco1.obtener(`${message.author.id}.vida`) || 0
    console.log(vida)
    if(vida < 1) return message.channel.send("<:locking:987799419065876510> Tienes 0 de vida  <:locking:987799419065876510>")}

 

  {
   let remat = await eco1.obtener(`${member.id}.vida`) || 0
    console.log(remat)
    if(remat < 1)return message.channel.send("<:locking:987799419065876510> El jugador se encuentra muerto <:locking:987799419065876510>")
  
  eco1.obtener(`${member.id}` + `.muertes`)

    let kil = Math.floor(1) 

    eco1.sumar(`${message.author.id}.muertes`, kil)}
  
    eco1.obtener(`${member.id}` + `.vida`)

   
    let random = Math.floor(Math.random() * (7 - 15)) + 15   
  eco1.restar(`${member.id}.vida`, random)


   

  

      if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Atacaste")
        .setDescription(`:white_check_mark: ${message.author} Le Atacaste a ${member}  Le quitaste <:energia:985182546595827782> ${random} de vida`) 
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")
        .setImage("https://media.discordapp.net/attachments/987881848988397618/1004892231951466616/nejrkjdnakdf.png")
        
        return message.channel.send(solonumeros)
    };
  
 }
}
