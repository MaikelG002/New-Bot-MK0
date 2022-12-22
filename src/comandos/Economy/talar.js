const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")


module.exports = class talar extends Comandos {
  constructor() {
    super('talar', 'Economy', [""]);
  }

  

async run(client, message, args){

 //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (talar.cooldown || 4) * 1000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".talar")) {
        const timestamps = await cooldowns.get(message.author.id+".talar")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 1000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 4s Para Poder Usar El Comando \`${talar.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".talar", now)
        setTimeout(() => cooldowns.delete(message.author.id+".talar"), cooldownAmount)
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
  let money = await eco.get(`${user}.hacha`) || 0
    console.log(money)
    if(money < 1)return message.channel.send("<:emoji_30:992839237697294496> Hacha insuficiente ")
  }//Sirve para poner tienes menos de 1 vida 

    let random = Math.floor(Math.random() * (5 - 100)) + 100
    console.log("se ha agregado " + random + " a la cuenta de " + usuario)

 let random2 = Math.floor(Math.random() * (5 - 28)) + 28// Te da numeros del 0 al 200 se puede cambiar//
    
     
   eco.restar(`${user}.hacha`, random2)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
  
    const embed = new Discord.MessageEmbed()

      .setAuthor("Talaste un arbol")
      .setDescription(` Y conseguiste <:emoji_31:992839401619066910> ${random} Y se desafilo la hacha en un <:emoji_30:992839237697294496> ${random2}%`)
      .setColor("RED")
      .setImage("https://media.discordapp.net/attachments/866310329255854100/992853082327224410/era_pinetree.png")
      
       
  
    await eco.sumar(`${user}.tronco`, random)


  

  
  
    message.channel.send(embed)

  

  {
  {
  let ex = await eco.get(`${user}.ex`) || 0
    console.log(ex)
    if(ex > 999)return message.channel.send("<:EX:987128715106459649> Alcansaste 100 de Experiencia <:EX:987128715106459649>")
  }//Sirve para poner tienes menos de 1 vida 

    let random = Math.floor(Math.random() * (5 - 45)) + 45
    console.log("se ha agregado " + random + " a la cuenta de " + usuario)


  
    
  
    await eco.sumar(`${user}.ex`, random)}

  
 }
}