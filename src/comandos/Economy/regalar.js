const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class regalar extends Comandos {
  constructor() {
    super('regalarefectivo', 'Economy', [""]);
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
  
  const member = message.mentions.members.first();

  
    {
  let money = await eco.get(`${message.author.id}.efectivo`) || 0
    console.log(money)
    if(money < 1)return message.channel.send("<:era_petzmoney1:1017944727271768065> Efectivo Insuficiente! <:money:985183013816115300>")
  }
 
  if(!member) return message.channel.send(` Menciona a un usuario`);
     
    
     const dinero_robar = await eco.obtener(`${member.id}` + `.efectivo`);
     
    let texto = args.slice(1).join(" ")
 if(!texto){
   return message.channel.send("Debes escribir un monto <:era_petzmoney1:1017944727271768065> ")
   
 }
  
    const random_dinero =   Math.floor(Math.random() * texto)
  
      message.channel.send(`:white_check_mark: ${message.author} Le Regalaste a ${member}  <:era_petzmoney1:1017944727271768065> ${texto} Gralats`); //Mandamos mensaje claramente.
      
    eco.sumar(`.${member.id}.efectivo`, texto)

  eco.restar(`${message.author.id}.efectivo`, texto)
  
 }
}
