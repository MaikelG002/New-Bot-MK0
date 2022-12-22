const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class procesar extends Comandos {
  constructor() {
    super('procesar', 'Economy', [""]);
  }

async run(client, message, args){


  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  {
  let ban = await eco.get(`${user}.ban`)
    console.log(ban)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }
  
  let rollfish = Math.floor(Math.random() * (1 - 7)) + 7;

  

  if(rollfish === 1) 
    {
      {
       let caña1 = await eco.get(`${user}.minerales`) || 0
    
    if(caña1 < 500)return message.channel.send("<:emoji_39:1001887184502128650> Minerales Insuficiente Necesitas 500!")
      }


      let random100 = Math.floor(Math.random() * (3 - 35)) + 35

      eco.sumar(`${user}.iron`, random100)

       let random101 = Math.floor(500)

      eco.restar(`${user}.minerales`, random101)


      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Procesaste los Minerales")
        .setDescription(`Y Ganaste <:emoji_40:1001887319458066432> ${random100} Iron `) 
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }
  
   if(rollfish === 2) 
     {
      {
       let caña2 = await eco.get(`${user}.minerales`) || 0
    
    if(caña2 < 500)return message.channel.send("<:emoji_39:1001887184502128650> Minerales Insuficiente Necesitas 500!")
      }

     let random2 = Math.floor(Math.random() * (1 - 20)) + 20

      eco.sumar(`${user}.silver`, random2)

       let random102 = Math.floor(500)

      eco.restar(`${user}.minerales`, random102)

      
 
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Procesaste los Minerales")
        .setDescription(`Y Ganaste <:emoji_41:1001887366027431986> ${random2} Silver`) 
        .setColor("RED")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }
  
  if(rollfish === 3) 
    {
      {
       let caña3 = await eco.get(`${user}.minerales`) || 0
    
    if(caña3 < 500)return message.channel.send("<:emoji_39:1001887184502128650> Minerales Insuficiente Necesitas 500!")
      }

      
 
       let random3 = Math.floor(Math.random() * (10 - 40)) + 40

      eco.sumar(`${user}.sapphire`, random3)

      let random103 = Math.floor(500)

      eco.restar(`${user}.minerales`, random103)

      
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Procesaste los minerales")
        .setDescription(`Y Ganaste <:emoji_42:1001887471308656781> ${random3} Sapphire `) 
        .setColor("#008f39")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }
  
  if(rollfish === 4)
    {
      {
       let caña4 = await eco.get(`${user}.minerales`) || 0
    
    if(caña4 < 500)return message.channel.send("<:emoji_39:1001887184502128650> Minerales Insuficiente Necesitas 500!")
      }


      let random4 = Math.floor(Math.random() * (5 - 50)) + 50

      eco.sumar(`${user}.ruby`, random4)

      let random104 = Math.floor(500)

      eco.sumar(`${user}.minerales`, random104)

      
  
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Procesaste los Minerales")
        .setDescription(`Y Ganaste <:emoji_43:1001887505689362522> ${random4} Ruby `) 
        .setColor("#51d1f6")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }

  if(rollfish === 5)
    {
      {
       let caña5 = await eco.get(`${user}.minerales`) || 0
    
    if(caña5 < 500)return message.channel.send("<:emoji_39:1001887184502128650> Minerales Insuficiente Necesitas 500!")
      }


      let random5 = Math.floor(Math.random() * (5 - 50)) + 50

      eco.sumar(`${user}.gold`, random5)


      let random105 = Math.floor(500)

      eco.restar(`${user}.minerales`, random105)
      
  
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Procesaste los Minerales")
        .setDescription(`Y Ganaste <:emoji_44:1001887537201156249> ${random5} Gold `) 
        .setColor("#51d1f6")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }

  if(rollfish === 6)
    {
      {
       let caña6 = await eco.get(`${user}.minerales`) || 0
    
    if(caña6 < 500)return message.channel.send("<:emoji_39:1001887184502128650> Minerales Insuficiente Necesitas 500!")
      }


      let random6 = Math.floor(Math.random() * (5 - 50)) + 50

      eco.sumar(`${user}.emerald`, random6)

      let random106 = Math.floor(500)

      eco.restar(`${user}.minerales`, random106)
  
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Procesaste los Minerales")
        .setDescription(`Y Ganaste <:emoji_45:1001887585385316413> ${random6} Emerald`) 
        .setColor("#51d1f6")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }

  if(rollfish === 7)
    {
      {
       let caña7 = await eco.get(`${user}.minerales`) || 0
    
    if(caña7 < 500)return message.channel.send("<:emoji_39:1001887184502128650> Minerales Insuficiente Necesitas 500!")
      }


      let random7 = Math.floor(Math.random() * (5 - 50)) + 50

      eco.sumar(`${user}.diamond`, random7)


      let random107 = Math.floor(500)

      eco.restar(`${user}.minerales`, random107)
      
  
      
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Procesaste los Minerales")
        .setDescription(`Y Ganaste <:emoji_46:1001887644260774039> ${random7} Diamond`) 
        .setColor("#51d1f6")
        .setFooter("Comando By MaikelG")

      

        return message.channel.send(solonumeros)
      
    }
  }
}