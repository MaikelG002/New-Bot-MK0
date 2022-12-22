const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("armas");
let eco1 = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")


module.exports = class healgun extends Comandos {
  constructor() {
    super('healgun', 'Armas', [""]);
  }

async run(client, message, args){
  
 
  
     //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (healgun.cooldown || 1) * 5000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".healgun")) {
        const timestamps = await cooldowns.get(message.author.id+".healgun")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 5000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 1.5s Para Poder Usar El Comando \`${healgun.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".healgun", now)
        setTimeout(() => cooldowns.delete(message.author.id+".healgun"), cooldownAmount)
  //Termina Cooldown//

  let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag
  
  {
  let ban = await eco.get(`${user}.ban`)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }
  
  const member = message.mentions.members.first();

  if(member.id === user) return message.channel.send(":x: No te puedes Disparar a ti mismo")
  
  if(!member) return message.channel.send(`Menciona a un usuario`)

 
  
     
  {
   let startgun = await eco.obtener(`${message.author.id}.healgun`) || 0
    if(startgun < 1) return message.channel.send("<:locking:987799419065876510> No tiene la Heal Gun <:locking:987799419065876510>")}

  {
   let vida = await eco1.obtener(`${member.id}.vida`) || 0
    if(vida > 95) return message.channel.send("<:locking:987799419065876510> Tiene +100 de Energia <:locking:987799419065876510>")}

  {
   let muni = await eco.obtener(`${message.author.id}.municion12`) || 0
    if(muni < 1)return message.channel.send("<:locking:987799419065876510> No tienes municion <:locking:987799419065876510>")}



    eco1.obtener(`${member.id}` + `.vida`)

   
    let random = Math.floor(5)  
  eco1.sumar(`${member.id}.vida`, random)


   
  
    eco.obtener(`${member.id}` + `.municion12`);
    let piu = Math.floor(Math.random() * (1 - 10)) + 10  
  eco.restar(`${message.author.id}.municion12`, piu)
  

      if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Disparo")
        .setDescription(`:white_check_mark: ${message.author} Le Disparaste a ${member} Y Le Añadiste <:energia:985182546595827782> ${random} de vida y perdiste <:emoji_25:992127713102024715> ${piu} Balas`) 
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")
        .setImage("https://cdn.discordapp.com/attachments/866310329255854100/1017162782094938214/era_icon-healinggun.png")
        
        return message.channel.send(solonumeros)
    };
  
 }
}
