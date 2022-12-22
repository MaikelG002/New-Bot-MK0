const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const CDDB = new megadb.crearDB("cooldowns")


module.exports = class ex extends Comandos {
  
constructor() {
    super(`ex`, 'Economy', [""])
      ; 
  }
  


async run(client, message, args){


    
  //Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (ex.cooldown || 2) * 3000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".ex")) {
        const timestamps = await cooldowns.get(message.author.id+".ex")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 3000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Aprox... 2s Para Poder Usar El Comando \`${ex.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".ex", now)
        setTimeout(() => cooldowns.delete(message.author.id+".ex"), cooldownAmount)
  //Termina Cooldown//

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  let ex1 = await eco.get(`${user}.ex`) || 0
    console.log(ex1)
    if(ex1 < 999)return message.channel.send(`<:EX:987128715106459649> Experiencias Insuficiente! Necesita 999 Tienes ${+ ex1} <:EX:987128715106459649>`)
  
    if(!eco.tiene(`${user}.ex`)){
        eco.establecer(`${user}`,{vida: "0" , efectivo: "0" , banco: "0"}); 
    
    }

  if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("<:EX:987128715106459649> Recompensas de Ex <:EX:987128715106459649>")
        .setDescription(
`**Cambiaste 999 Ex Por:**
1-) 1 **Event Coin** <:eventcoin:987007503596417065>
2-) 50 **Energia**<:energia:985182546595827782>
3-) 1000 **Gold Coin** <a:Goldpacks:985536866071760946>
4-) 5000 **Gralats** <:bolsadinero:985532573373571154>`) 
        .setColor("BLUE")
          .setImage("https://cdn.discordapp.com/attachments/866310329255854100/987502030866243624/era_rima-br-militarywoodenbox.png")
        .setFooter("Comando By MaikelG")

    {
   var random0 = Math.floor(999)

        eco.restar(`${user}.ex`, random0)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }
    {
   var random1 = Math.floor(1)

        eco.sumar(`${user}.eventcoin`, random1)

  }

    {
   var random2 = Math.floor(50)

        eco.sumar(`${user}.vida`, random2)

  }

    {
   var random3 = Math.floor(1000)

        eco.sumar(`${user}.coins`, random3)

  }
    {
   var random4 = Math.floor(5000)

        eco.sumar(`${user}.efectivo`, random4)

  }
    
        
    return message.channel.send(solonumeros)
    }
 }
}