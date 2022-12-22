const Comandos = require('../../util/estructuras/Comandos');
const discord = require("discord.js")
const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const ms = require("ms")
const CDDB = new megadb.crearDB("cooldowns")
let Armas = new megadb.crearDB("armas");


module.exports = class launchergranade extends Comandos {
  constructor() {
    super('launcher', 'Economy', [""]);
  }

  async run (client, message, args) {

    //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (launchergranade.cooldown || 5) * 1000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".launchergranade")) {
        const timestamps = await cooldowns.get(message.author.id+".launchergranade")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 1000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Para Poder Usar El Comando Aprox... 5s \`${launchergranade.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".launchergranade", now)
        setTimeout(() => cooldowns.delete(message.author.id+".launchergranade"), cooldownAmount)
  //Termina Cooldown//

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    {
  let ban = await eco.get(`${user}.ban`)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
  }

  const member = message.mentions.members.first();
  
  if(!member) return message.channel.send(`Menciona a un usuario`)

  {
    let startgun = await Armas.obtener(`${message.author.id}.launchergranade`) || 0
     if(startgun < 1) return message.channel.send("<:locking:987799419065876510> No tiene la Launcher Granade <:locking:987799419065876510>")}
 
   {
    let vida = await eco.obtener(`${member.id}.vida`) || 0
     if(vida < 1) return message.channel.send(`<:locking:987799419065876510> ${member} Jugador eliminado Energia: -0 <:locking:987799419065876510>`)}
 
     {
        let muni = await Armas.obtener(`${message.author.id}.municion12`) || 0
         if(muni < 1)return message.channel.send("<:locking:987799419065876510> No tienes municion <:locking:987799419065876510>")}

         Armas.obtener(`${user}` + `.municion12`);
         let piu = Math.floor(Math.random() * (10 - 35)) + 35 
       Armas.restar(`${message.author.id}.municion12`, piu)

     let tiempo = ['20s', '10s']

     const time = tiempo[Math.floor(Math.random() * tiempo.length)];

  if(!time)return message.reply("Cuantas Horas minutos o segundos")
  if(ms(time) > ms("1d"))return message.reply("Superaste el limite de 1 dia")
  
  
  
  const embed = new discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`,message.author.displayAvatarURL())
  .setTitle("Disparo De Granadas")
  .setColor("#FF8000")
  .setImage("https://cdn.discordapp.com/attachments/866310329255854100/1018188859458203708/era_shiz-grenadelauncher-icon.png")
  .setDescription(`Lanzaste una granada a ${member}`)
  .setTimestamp()
  message.channel.send(embed)
  
  setTimeout(() => {
     let random = Math.floor(Math.random() * (10 - 50)) + 50
     eco.obtener(`${member.id}` + `.vida`)// Te da numeros del 0 al 200 se puede cambiar//
  eco.restar(`${member.id}.vida`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
    
    const embed = new discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`,message.author.displayAvatarURL())
  .setTitle(`Disparo`)
  .setColor("#FF8000")
  .setDescription(`${usuario} Le disparo Una granada a ${member} Le hizo ${random} De daño Y perdio ${piu} Ammo12`)
  .setImage("https://cdn.discordapp.com/attachments/866310329255854100/1018188859458203708/era_shiz-grenadelauncher-icon.png")
  .setTimestamp()
    message.channel.send(embed)



  }, ms(time))
  
  // You Can modified the command whatever you want 

  }
}