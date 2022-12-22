const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")


module.exports = class taladrar extends Comandos {
  constructor() {
    super('taladrar', 'Economy', [""]);
  }

  

async run(client, message, args){

  //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (taladrar.cooldown || 5) * 3000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".taladrar")) {
        const timestamps = await cooldowns.get(message.author.id+".taladrar")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 5s Para Poder Usar El Comando \`${taladrar.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".taladrar", now)
        setTimeout(() => cooldowns.delete(message.author.id+".taladrar"), cooldownAmount)
  //Termina Cooldown//

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  {
  let ban = await eco.get(`${user}.ban`)
    console.log(ban)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }
  
    if(!eco.tiene(`${user}.efectivo`)){
        eco.establecer(`${user}`,{vida: "0" , efectivo: "0" , banco: "0"}); 
    
    }
  
  {
  let money = await eco.get(`${user}.taladro`) || 0
    console.log(money)
    if(money < 1)return message.channel.send("<:emoji_34:992899513318658128> Taladro insuficiente <:emoji_34:992899513318658128>")
  }//Sirve para poner tienes menos de 1 vida 

    let random = Math.floor(Math.random() * (2 - 40)) + 40
    console.log("se ha agregado " + random + " a la cuenta de " + user)

 let random2 = Math.floor(Math.random() * (5 - 50)) + 50// Te da numeros del 0 al 200 se puede cambiar//
    
     
   eco.restar(`${user}.taladro`, random2)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
  
    const embed = new Discord.MessageEmbed()

      .setAuthor("Taladraste Las Piedras")
      .setDescription(` Y conseguiste <:emoji_33:992899412055564469> ${random} Block Y se desgasto el taladro <:emoji_34:992899513318658128> ${random2}%`)
      .setColor("RED")
      .setImage("https://media.discordapp.net/attachments/866310329255854100/992899115086270484/era_mercy-8877.png")
      
       
  
    await eco.sumar(`${user}.construccion2`, random)


  

  
  
    message.channel.send(embed)

  

  {
  {
  let ex = await eco.get(`${user}.ex`) || 0
    console.log(ex)
    if(ex > 999)return message.channel.send("<:EX:987128715106459649> Alcansaste 100 de Experiencia <:EX:987128715106459649>")
  }//Sirve para poner tienes menos de 1 vida 

    let random = Math.floor(Math.random() * (5 - 35)) + 35
    console.log("se ha agregado " + random + " a la cuenta de " + user)


  
    
  
    await eco.sumar(`${user}.ex`, random)}
  
 }
}