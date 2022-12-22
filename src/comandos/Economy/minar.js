const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")


module.exports = class minar extends Comandos {
  constructor() {
    super('minar', 'Economy', [""]);
  }

  

async run(client, message, args){

  //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (minar.cooldown || 5) * 3000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".minar")) {
        const timestamps = await cooldowns.get(message.author.id+".minar")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 5s Para Poder Usar El Comando \`${minar.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".minar", now)
        setTimeout(() => cooldowns.delete(message.author.id+".minar"), cooldownAmount)
  //Termina Cooldown//

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  {
  let ban = await eco.get(`${user}.ban`)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }

  {
  let vip = await eco.get(`${user}.vip`)
    if(vip === 1) return message.channel.send("Eres Vip Usa tu respectivo comando `!vipminar`")
   
  }
  
  {
  let money = await eco.get(`${user}.drill`) || 0
    
    if(money < 1)return message.channel.send("<:emoji_38:1001887136649314354> Drill insuficiente ")
  }//Sirve para poner tienes menos de 1 vida 

    let random = Math.floor(Math.random() * (10 - 100)) + 100
    console.log("se ha agregado " + random + " a la cuenta de " + usuario)

 let random2 = Math.floor(Math.random() * (10 - 30)) + 30// Te da numeros del 0 al 200 se puede cambiar//
    
     
   eco.restar(`${user}.drill`, random2)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
  
    const embed = new Discord.MessageEmbed()

      .setAuthor("Minaste")
      .setDescription(` Y conseguiste <:emoji_39:1001887184502128650> ${random} Minerales, y se daño <:emoji_38:1001887136649314354> Drill en un ${random2}%`)
      .setColor("BLACK")
      .setImage("https://media.discordapp.net/attachments/991862498343010386/1004530867026284694/era_image-mine_machine.png")
      
       
  
    await eco.sumar(`${user}.minerales`, random)


    message.channel.send(embed)

 }
}