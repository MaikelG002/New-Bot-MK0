const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("armas");
let eco1 = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")

module.exports = class dragonrifle extends Comandos {
  constructor() {
    super('dragonrifle', 'Armas', [""]);
  }

async run(client, message, args){

   
 
      //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (dragonrifle.cooldown || 2) * 1000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".dragonrifle")) {
        const timestamps = await cooldowns.get(message.author.id+".dragonrifle")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 1000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 2s Para Poder Usar La Dragon Rifle \`${dragonrifle.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".dragonrifle", now)
        setTimeout(() => cooldowns.delete(message.author.id+".dragonrifle"), cooldownAmount)
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
   let dragonrifle = await eco.obtener(`${message.author.id}.dragonrifle`) || 0
  
    if(dragonrifle < 1) return message.channel.send("<:locking:987799419065876510> No tiene la dragonrifle <:locking:987799419065876510>")}

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

   
    let random = Math.floor (11)  
  eco1.restar(`${member.id}.vida`, random)


   
eco.obtener(`${member.id}` + `.municion18`);



    let piu = Math.floor(Math.random() * (5 - 20)) + 20  
  eco.restar(`${message.author.id}.municion18`, piu)
  

      if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Disparaste")
        .setDescription(`:white_check_mark: ${message.author} Le Atacaste a ${member}  Le quitaste <:energia:985182546595827782> ${random} de vida y perdiste ${piu} de Ammo18`) 
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")
        .setImage("https://cdn.discordapp.com/attachments/991862498343010386/1007078591965691914/Dragonrifle2.png")
        
        return message.channel.send(solonumeros)
    };
  
 }
}
