const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("armas");
let eco1 = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")


module.exports = class startgun extends Comandos {
  constructor() {
    super('startgun', 'Armas', [""]);
  }

async run(client, message, args){
  
 
  
     //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (startgun.cooldown || 4) * 4000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".startgun")) {
        const timestamps = await cooldowns.get(message.author.id+".startgun")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 4s Para Poder Usar El Comando \`${startgun.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".startgun", now)
        setTimeout(() => cooldowns.delete(message.author.id+".startgun"), cooldownAmount)
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
   let startgun = await eco.obtener(`${message.author.id}.startgun`) || 0
    console.log(startgun)
    if(startgun < 1) return message.channel.send("<:locking:987799419065876510> No tiene la Startgun <:locking:987799419065876510>")}

  {
   let vida = await eco1.obtener(`${message.author.id}.vida`) || 0
    console.log(vida)
    if(vida < 1) return message.channel.send("<:locking:987799419065876510> Tienes 0 de vida  <:locking:987799419065876510>")}

  {
   let muni = await eco.obtener(`${message.author.id}.municion9`) || 0
    console.log(muni)
    if(muni < 1)return message.channel.send("<:locking:987799419065876510> No tienes municion <:locking:987799419065876510>")}

  {
   let remat = await eco1.obtener(`${member.id}.vida`) || 0
    console.log(remat)
    if(remat < 1)return message.channel.send("<:locking:987799419065876510> El jugador se encuentra muerto <:locking:987799419065876510>")

    eco1.obtener(`${member.id}` + `.muertes`)

    let kil = Math.floor(1) 

    eco1.sumar(`${message.author.id}.muertes`, kil)
    
  }

     
  
    eco1.obtener(`${member.id}` + `.vida`)

   
    let random = Math.floor(Math.random() * (5 - 8)) + 8   
  eco1.restar(`${member.id}.vida`, random)


   
  
    eco.obtener(`${member.id}` + `.municion9`);



    let piu = Math.floor(Math.random() * (3 - 15)) + 15   
  eco.restar(`${message.author.id}.municion9`, piu)
  

      if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Disparo")
        .setDescription(`:white_check_mark: ${message.author} Le Disparaste a ${member}  Le quitaste <:energia:985182546595827782> ${random} de vida y perdiste <:emoji_25:992127713102024715> ${piu} Balas`) 
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")
        .setImage("https://media.discordapp.net/attachments/528310273761607693/990323029315846154/unknown.png?width=43&height=43")
        
        return message.channel.send(solonumeros)
    };
  
 }
}
