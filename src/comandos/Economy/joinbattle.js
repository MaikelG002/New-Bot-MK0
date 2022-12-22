const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
 


module.exports = class joinbattle extends Comandos {
  constructor() {
    super('', 'Economy', [""]);
  }

  

async run(client, message, args){

  ////CooldowCooldownn system by MaikelG//
      const { cooldowns } = client;
      if (!cooldowns.has(joinbattle.name)) {
        cooldowns.set(joinbattle.name, new Map());
      }
    
      const now = Date.now();
      const timestamps = cooldowns.get(joinbattle.name);
      const cooldownAmount = (joinbattle.cooldown || 20) * 3000;
    
      if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Para Poder Usar El Comando \`${joinbattle.name}\` `);
          } catch (e) { console.log(e) }
        }
      }
    
      timestamps.set(message.author.id, now);
      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  //Termina Cooldown//

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  
    if(!eco.tiene(`${server}.${user}.efectivo`)){
        eco.establecer(`${server}.${user}`,{vida: "0" , efectivo: "0" , banco: "0"}); 
    
    }
  
  {
  let money = await eco.get(`${server}.${user}.vida`) || 0
    console.log(money)
    if(money < 1)return message.channel.send("Vida Insuficiente!")
  }//Sirve para poner tienes menos de 1 vida 

    let random = Math.floor(Math.random() * (100 - 2000)) + 2000
    


    const embed = new Discord.MessageEmbed()

      .setAuthor("Te uniste al Battle Royal")
      .setDescription(" Y conseguiste " + random,"Exp")
      .setColor("RED")
      
       
  
    await eco.sumar(`${server}.${user}.exp`, random)

    message.channel.send(embed)

  {
   let random = Math.floor(Math.random() * (5 - 25)) + 25// Te da numeros del 0 al 200 se puede cambiar//
    
     
   eco.restar(`${server}.${user}.vida`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }


  
 }
}