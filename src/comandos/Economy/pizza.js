const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")



module.exports = class pizza extends Comandos {
  constructor() {
    super('pizza', 'Economy', [""]);
  }

  
  

async run(client, message, args){

//Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (pizza.cooldown || 35) * 3000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".pizza")) {
        const timestamps = await cooldowns.get(message.author.id+".pizza")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 35s Para Poder Usar El Comando \`${pizza.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".pizza", now)
        setTimeout(() => cooldowns.delete(message.author.id+".pizza"), cooldownAmount)
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
        eco.establecer(`.${user}`,{vida: "0" , efectivo: "0" , banco: "0"}); 
    
    }

  
  
  {
  let money = await eco.get(`${user}.peal`) || 0
    console.log(money)
    if(money < 1)return message.channel.send("Peal Insuficiente! <:peal:985536932421468210> ")
  }//Sirve para poner tienes menos de 1 vida 

    let random = Math.floor(Math.random() * 2500)
    console.log("Utilizo el comando !pizza Y gano" + random + "Gralats a la cuenta de " + usuario)

  

    const embed = new Discord.MessageEmbed()

      .setAuthor("Trabajaste Como pizzero")
      .setDescription(" Y conseguiste <:era_petzmoney1:1017944727271768065> " + random)
      .setColor("RED")
      .setThumbnail("https://i.imgur.com/STCrXDd.png")
  
      
       
  
    await eco.sumar(`${user}.efectivo`, random)

    message.channel.send(embed)

  {
   let random = Math.floor(Math.random() * (2 - 15)) + 15// Te da numeros del 0 al 200 se puede cambiar//
    
     
   eco.restar(`${user}.peal`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }

  {
  {
  let ex = await eco.get(`${user}.ex`) || 0
    console.log(ex)
    if(ex > 999)return message.channel.send("<:EX:987128715106459649> Alcansaste 100 de Experiencia <:EX:987128715106459649>")
  }//Sirve para poner tienes menos de 1 vida 

    let random = Math.floor(Math.random() * (1 - 12)) + 12
    console.log("se ha agregado " + random + " a la cuenta de " + user)


  
    
  
    await eco.sumar(`${user}.ex`, random)}
  
 }
}