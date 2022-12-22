const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let armas = new megadb.crearDB("armas");


module.exports = class vender extends Comandos {
  constructor() {
    super('vender', 'sell-cmd', [""]);
  }

  async run(client, message, args) {

   
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag


     switch(args[0]) {
       //////////////////////////////////////////// 
    case 'tronco': 
         
let tronco = await eco.get(`${user}.tronco`) || 0
    console.log(tronco)
    if(tronco < 1)return message.channel.send("Tronco <:emoji_31:992839401619066910> insuficiente")

         let tronco1 = await eco.get(`${user}.tronco`) 
    if(tronco1 < 500){

        
   let random1 = Math.floor(Math.random() * (50 - 100)) + 100
    
        eco.sumar(`${user}.efectivo`, random1)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
  
  
  

    const embed1 = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription(`Vendiste con exito <:emoji_31:992839401619066910> ${tronco} Tronco Y ganaste <:era_petzmoney1:1017944727271768065>${random1} Gralats`)
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")
         
         
    await eco.restar(`${user}.tronco`, tronco)

    message.channel.send(embed1)
     
  

    break;
     
    }
///////////

         let tronco2 = await eco.get(`${user}.tronco`) 
    if(tronco2 > 1000){

        
   let random2 = Math.floor(Math.random() * (1500 - 10000)) + 10000
    
        eco.sumar(`${user}.efectivo`, random2)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
  
  
  

    const embed2 = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription(`Vendiste con exito <:emoji_31:992839401619066910> ${tronco2} Tronco Y ganaste <:era_petzmoney1:1017944727271768065>${random2} Gralats`)
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")
         
         
    await eco.restar(`${user}.tronco`, tronco2)

    message.channel.send(embed2)
     
  

    break;
     
    }
/////////
         let tronco3 = await eco.get(`${user}.tronco`) 
    
   
   let random3 = Math.floor(Math.random() * (499 - 3500)) + 3500
    
        eco.sumar(`${user}.efectivo`, random3)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
  
  
  

    const embed3 = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription(`Vendiste con exito <:emoji_31:992839401619066910> ${tronco3} Tronco Y ganaste <:era_petzmoney1:1017944727271768065> ${random3} Gralats`)
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")
         
         
    await eco.restar(`${user}.tronco`, tronco3)

    message.channel.send(embed3)
     
  

    break;
      ////////////////////////////

         case 'block': 


let block = await eco.get(`${user}.construccion2`) || 0
    console.log(block)
    if(block < 1)return message.channel.send("Block <:emoji_33:992899412055564469> insuficiente")

         let block1 = await eco.get(`${user}.construccion2`) 
    if(block1 < 100){

        
   let random2 = Math.floor(Math.random() * (50 - 200)) + 200
    
        eco.sumar(`${user}.efectivo`, random2)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
  
  
  

    const embed2 = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription(`Vendiste con exito <:emoji_33:992899412055564469> ${block1} Bock Y ganaste <:era_petzmoney1:1017944727271768065>${random2} Gralats`)
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")
         
         
    await eco.restar(`${user}.construccion2`, block1)

    message.channel.send(embed2)
     
  

    break;
     
    }
///////////

         let block2 = await eco.get(`${user}.construccion2`) 
    if(block2 > 1000){

        
   let random3 = Math.floor(Math.random() * (3500 - 10000)) + 10000
    
        eco.sumar(`${user}.efectivo`, random3)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
  
  
  

    const embed3 = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription(`Vendiste con exito <:emoji_33:992899412055564469> ${block2} Block Y ganaste <:era_petzmoney1:1017944727271768065> ${random3} Gralats`)
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")
         
         
    await eco.restar(`${user}.construccion2`, block2)

    message.channel.send(embed3)
     
  

    break;
     
    }
/////////
         let block3 = await eco.get(`${user}.construccion2`) 
    
   
   let random4 = Math.floor(Math.random() * (1000 - 4000)) + 4000
    
        eco.sumar(`${user}.efectivo`, random4)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado
  
  
  

    const embed4 = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription(`Vendiste con exito <:emoji_33:992899412055564469> ${block3} Block Y ganaste <:era_petzmoney1:1017944727271768065> ${random4} Gralats`)
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")
         
         
    await eco.restar(`${user}.construccion2`, block3)

    message.channel.send(embed4)
         
         break;  

          case 'fishbass': 

         let fishbass = await eco.get(`${user}.pescado1`) || 0
    console.log(fishbass)
    if(fishbass < 100)return message.channel.send(`<:fishbass:976231075510632538> FishBass Insuficiente! Necesitas 100+ Y solo Tienes ${fishbass}`)
         
 let random6 = Math.floor(Math.random() * (400 - 1500)) + 1500

        eco.sumar(`${user}.efectivo`, random6)
     
    const embed = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription(`Vendiste con exito ${fishbass} <:fishbass:976231075510632538> Y Ganaste <:era_petzmoney1:1017944727271768065>${random6} Gralats`)
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")

    await eco.restar(`${user}.pescado1`, fishbass)

    message.channel.send(embed)
         
         break;

         case 'fishred': 

         let fishred = await eco.get(`${user}.pescado2`) || 0
    console.log(fishred)
    if(fishred < 250)return message.channel.send(`<:fishred:976231751535964190> FishRed Insuficiente! Necesitas 250+ Y solo Tienes ${fishred}`)
         
  let random7 = Math.floor(Math.random() * (1000 - 2500)) + 2500

        eco.sumar(`${user}.efectivo`, random7)
     
    const embed7 = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription(`Vendiste con exito ${fishred} <:fishred:976231751535964190> Y Ganaste <:era_petzmoney1:1017944727271768065> ${random7} Gralats`)
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")

    await eco.restar(`${user}.pescado2`, fishred)

    message.channel.send(embed7)
         
         break;

         case 'fishperch': 

         let fishperch = await eco.get(`${user}.pescado3`) || 0
    console.log(fishperch)
    if(fishperch < 500)return message.channel.send(`<:fishperch:976231833597534278> FishPerch Insuficiente! Necesitas 500+ Y solo Tienes ${fishperch}`)

  let random8 = Math.floor(Math.random() * (2500 - 3500)) + 3500

        eco.sumar(`${user}.efectivo`, random8)

    const embed8 = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription(`Vendiste con exito ${fishperch} <:fishperch:976231833597534278> Y Ganaste <:era_petzmoney1:1017944727271768065> ${random8} Gralats`)
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")

    await eco.restar(`${user}.pescado3`, fishperch)

    message.channel.send(embed8)
         
         break;

         case 'fishtuna': 

         let fishtuna = await eco.get(`${user}.pescado4`) || 0
    console.log(fishtuna)
    if(fishtuna < 850)return message.channel.send(`<:fishtuna:976231798885466223> FishTuna Insuficiente! Necesitas  850+ Y solo Tienes ${fishtuna}`)
          
  let random9 = Math.floor(Math.random() * (3500 - 8000)) + 8000;

        eco.sumar(`${user}.efectivo`, random9)
         
    const embed9 = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription(`Vendiste con exito ${fishtuna} <:fishtuna:976231798885466223> Y Ganaste <:era_petzmoney1:1017944727271768065> ${random9} Gralats`)
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")

    await eco.restar(`${user}.pescado4`, fishtuna)

    message.channel.send(embed9)
         
         break;

         case 'minerales': 

         let iron = await eco.get(`${user}.iron`)
         let silver = await eco.get(`${user}.silver`)
         let sapphire = await eco.get(`${user}.sapphire`)
         let ruby = await eco.get(`${user}.ruby`)
         let gold = await eco.get(`${user}.gold`)
         let emerald = await eco.get(`${user}.emerald`)
         let diamond = await eco.get(`${user}.diamond`) || 0
    
    if(iron < 30)return message.channel.send(`<:emoji_40:1001887319458066432>  iron Insuficiente! Necesitas  30+ Y solo Tienes ${iron}`)
    if(silver < 50)return message.channel.send(`<:emoji_41:1001887366027431986>  silver Insuficiente! Necesitas  50+ Y solo Tienes ${silver}`)
    if(sapphire < 50)return message.channel.send(`<:emoji_42:1001887471308656781>   sapphire Insuficiente! Necesitas  50+ Y solo Tienes ${sapphire}`)
    if(ruby < 80)return message.channel.send(`<:emoji_43:1001887505689362522>
    ruby Insuficiente! Necesitas  80+ Y solo Tienes ${ruby}`)
    if(gold < 100)return message.channel.send(`<:emoji_44:1001887537201156249>
    gold Insuficiente! Necesitas  100+ Y solo Tienes ${gold}`)
    if(emerald < 120)return message.channel.send(`<:emoji_45:1001887585385316413>  emerald Insuficiente! Necesitas  120+ Y solo Tienes ${emerald}`)
    if(diamond< 150)return message.channel.send(`<:emoji_46:1001887644260774039>
    diamond Insuficiente! Necesitas  150+ Y solo Tienes ${diamond}`) 

  let random10 = Math.floor(Math.random() * (10 - 1000)) + 1000;
  let random11 = Math.floor(Math.random() * (50 - 1500)) + 1500;
  let random12 = Math.floor(Math.random() * (100 - 2000)) + 2000;
  let random13 = Math.floor(Math.random() * (150 - 3500)) + 3500;
  let random14 = Math.floor(Math.random() * (350 - 1500)) + 1500;
  let random15 = Math.floor(Math.random() * (500 - 4000)) + 4000;
  let random16 = Math.floor(Math.random() * (500 - 10000)) + 10000;

        eco.sumar(`${user}.efectivo`, random10)
        eco.sumar(`${user}.efectivo`, random11)
        eco.sumar(`${user}.efectivo`, random12)
        eco.sumar(`${user}.efectivo`, random13)
        eco.sumar(`${user}.efectivo`, random14)
        eco.sumar(`${user}.efectivo`, random15)
        eco.sumar(`${user}.efectivo`, random16)
         
    const embed10 = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription(`Vendiste con exito 
    ${iron} <:emoji_40:1001887319458066432> Y Ganaste <:era_petzmoney1:1017944727271768065> ${random10} Gralats)
    ${silver} <:emoji_41:1001887366027431986> Y Ganaste <:era_petzmoney1:1017944727271768065> ${random11} Gralats)
    ${sapphire} <:emoji_42:1001887471308656781> Y Ganaste <:era_petzmoney1:1017944727271768065> ${random12} Gralats)
    ${ruby} <:emoji_43:1001887505689362522> Y Ganaste <:era_petzmoney1:1017944727271768065> ${random13} Gralats)
    ${gold} <:emoji_44:1001887537201156249> Y Ganaste <:era_petzmoney1:1017944727271768065> ${random14} Gralats)
    ${emerald} <:emoji_45:1001887585385316413> Y Ganaste <:era_petzmoney1:1017944727271768065> ${random15} Gralats)
    ${diamond} <:emoji_46:1001887644260774039> Y Ganaste <:era_petzmoney1:1017944727271768065> ${random16} Gralats`)
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")

    await eco.restar(`${user}.iron`, iron)
    await eco.restar(`${user}.silver`, silver)
    await eco.restar(`${user}.sapphire`, sapphire)
    await eco.restar(`${user}.ruby`, ruby)
    await eco.restar(`${user}.gold`, gold)
    await eco.restar(`${user}.emerald`, emerald)
    await eco.restar(`${user}.diamond`, diamond)


    message.channel.send(embed10)
         
         break;
   }
  }
}
