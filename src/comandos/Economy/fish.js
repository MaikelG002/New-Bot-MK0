const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const talkedRecently = new Set();



module.exports = class fish extends Comandos {
  constructor() {
    super('', 'Economy', [""]);
  }

async run(client, message, args){

  

  //Cooldown system by MaikelG//
      const { cooldowns } = client;
      if (!cooldowns.has(fish.name)) {
        cooldowns.set(fish.name, new Map());
      }
    
      const now = Date.now();
      const timestamps = cooldowns.get(fish.name);
      const cooldownAmount = (fish.cooldown || 15) * 3000;
    
      if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Para Poder Usar El Comando \`${fish.name}\` `);
          } catch (e) { console.log(e) }
        }
      }
    
      timestamps.set(message.author.id, now);
      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  //Termina Cooldown//

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag
//Agregar variables abajos para los nuevos, y lo que ya estan agregar la variable desde economia.json
  
   
    if(!eco.tiene(`${user}.pescado2`)){
        eco.establecer(`${user}`,{
          
          pescado1: 0, 
          pescado2: 0,
          pescado3: 0,
          pescado4: 0
          

        }); 
    }
  

   {
  let money = await eco.get(`${user}.caña`) || 0
    console.log(money)
    if(money < 1)return message.channel.send("<:caa:976231936051802162> caña Insuficiente!")
  }//Sirve para poner tienes menos de 1 vida 

   {
  let money1 = await eco.get(`${user}.gusanos`) || 0
    console.log(money1)
    if(money1 < 1)return message.channel.send("<:gusano:976232014195875850> Gusanos Insuficiente!")
  }//Sirve para poner tienes menos de 1 vida 

 
  
    var random = Math.floor(Math.random() * 30)
    console.log("se ha agregado "+ random + " a la cuenta de "+ user)

    const embed = new Discord.MessageEmbed()

      

    .setAuthor("Pescaste")
    .setDescription(" Y conseguiste <:fishred:976231751535964190> "+ random)
    .setColor("GREEN")
.setThumbnail("https://media.discordapp.net/attachments/971245334221193247/976249177564651540/era_fishrack1.png")

  

    await eco.sumar(`${user}.pescado2`, random)

    message.channel.send(embed)

  {
   Math.floor(Math.random() * (0 - 19))

        eco.restar(`${user}.caña`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
  }

  {
   Math.floor(Math.random() * (2 - 10))

 eco.restar(`${user}.gusanos`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
  }

  }
  
}