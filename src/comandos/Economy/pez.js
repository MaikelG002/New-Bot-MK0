const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")

module.exports = class pez extends Comandos {
  constructor() {
    super('pescar', 'Ejemplos', [""]);
  }

async run(client, message, args){

//Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (pez.cooldown || 2) * 3000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".pez")) {
        const timestamps = await cooldowns.get(message.author.id+".pez")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 2s Para Poder Usar El Comando \`${pez.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".pez", now)
        setTimeout(() => cooldowns.delete(message.author.id+".pez"), cooldownAmount)
  //Termina Cooldown//
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

{
  let ban = await eco.get(`${user}.ban`)
    console.log(ban)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }
  
  let rollfish = Math.floor(Math.random() * (1 - 4)) + 4;

  

  if(rollfish === 1) 
    {
      {
       let caña1 = await eco.get(`${user}.caña`) || 0
    
    if(caña1 < 1)return message.channel.send("<:caa:976231936051802162> caña Insuficiente!")
      }
      {
      let money1 = await eco.get(`${user}.gusanos`) || 0
    
    if(money1 < 1)return message.channel.send("<:gusano:976232014195875850> Gusanos Insuficiente!")
      }

      let random1 = Math.floor(Math.random() * (5 - 30)) + 30

      eco.sumar(`${user}.pescado1`, random1)   

      

       let random2 = Math.floor(Math.random() * (0 - 19)) + 19

      eco.restar(`${user}.caña`, random2)

      
 
       let random3 = Math.floor(Math.random() * (5 - 30)) + 30

      eco.restar(`${user}.gusanos`, random3)
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Pescaste")
        .setDescription(`Y Ganaste <:fishbass:976231075510632538> ${random1} FishBass Y perdiste <:caa:976231936051802162> ${random2} Caña y <:bolsagusanos:985536993473748993> ${random3} Gusanos`) 
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }
  
   if(rollfish === 2) 
     {
      {
       let caña1 = await eco.get(`${user}.caña`) || 0
    
    if(caña1 < 1)return message.channel.send("<:caa:976231936051802162> caña Insuficiente!")
      }
      {
      let money1 = await eco.get(`${user}.gusanos`) || 0
    
    if(money1 < 1)return message.channel.send("<:gusano:976232014195875850> Gusanos Insuficiente!")
      }

      let random1 = Math.floor(Math.random() * (5 - 45)) + 45

      eco.sumar(`${user}.pescado2`, random1)   

      

       let random2 = Math.floor(Math.random() * (0 - 19)) + 19

      eco.restar(`${user}.caña`, random2)

      
 
       let random3 = Math.floor(Math.random() * (5 - 30)) + 30

      eco.restar(`${user}.gusanos`, random3)
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Pescaste")
        .setDescription(`Y Ganaste <:fishred:976231751535964190> ${random1} FishRed Y perdiste <:caa:976231936051802162> ${random2} Caña y <:bolsagusanos:985536993473748993> ${random3} Gusanos`) 
        .setColor("RED")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }
  
  if(rollfish === 3) 
    {
      {
       let caña1 = await eco.get(`${user}.caña`) || 0
    
    if(caña1 < 1)return message.channel.send("<:caa:976231936051802162> caña Insuficiente!")
      }
      {
      let money1 = await eco.get(`${user}.gusanos`) || 0
    
    if(money1 < 1)return message.channel.send("<:gusano:976232014195875850> Gusanos Insuficiente!")
      }

      let random1 = Math.floor(Math.random() * (10 - 65)) + 65

      eco.sumar(`${user}.pescado3`, random1)   

      

       let random2 = Math.floor(Math.random() * (0 - 19)) + 19

      eco.restar(`${user}.caña`, random2)

      
 
       let random3 = Math.floor(Math.random() * (5 - 30)) + 30

      eco.restar(`${user}.gusanos`, random3)
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Pescaste")
        .setDescription(`Y Ganaste <:fishperch:976231833597534278> ${random1} FishPerch Y perdiste <:caa:976231936051802162> ${random2} Caña y <:bolsagusanos:985536993473748993> ${random3} Gusanos`) 
        .setColor("#008f39")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }
  
  if(rollfish === 4)
    {
      {
       let caña1 = await eco.get(`.${user}.caña`) || 0
    
    if(caña1 < 1)return message.channel.send("<:caa:976231936051802162> caña Insuficiente!")
      }
      {
      let money1 = await eco.get(`${user}.gusanos`) || 0
    
    if(money1 < 1)return message.channel.send("<:gusano:976232014195875850> Gusanos Insuficiente!")
      }

      let random1 = Math.floor(Math.random() * (10 - 85)) + 85

      eco.sumar(`${user}.pescado4`, random1)   

      

       let random2 = Math.floor(Math.random() * (0 - 19)) + 19

      eco.restar(`${user}.caña`, random2)

      
 
       let random3 = Math.floor(Math.random() * (5 - 30)) + 30

      eco.restar(`${user}.gusanos`, random3)
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Pescaste")
        .setDescription(`Y Ganaste <:fishtuna:976231798885466223> ${random1} FishTuna Y perdiste <:caa:976231936051802162> ${random2} Caña y <:bolsagusanos:985536993473748993> ${random3} Gusanos`) 
        .setColor("#51d1f6")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }
  }
}