const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let armas = new megadb.crearDB("armas");


module.exports = class ammo18 extends Comandos {
  constructor() {
    super('buy12', 'buy-cmd', [""]);
  }

async run(client, message, args){

  
    let objs = {
      ammo18: 5200,
      
    }

    if(!objs[args[0]])return message.channel.send(`No se a seleccionado ningun objeto> !buy12 ammo18`)

    let amount = objs[args[0]]
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(!eco.tiene(`${user}.efectivo`)){
        eco.establecer(`${usuario}.${user}`,
        {
          vida: 0, 
          efectivo: 0,
          banco: 0    
        }
      );
      
      message.channel.send("Dinero Insuficiente")
      return
    }

    let money = await eco.get(`${usuario}.${user}.efectivo`) || 0
    console.log(money)
    if(money < amount)return message.channel.send("Dinero Insuficiente!")
  
  

    const embed = new Discord.MessageEmbed()

    .setAuthor("Compra Realizada!")
    .setDescription("Compraste con exito 5200 <:emoji_29:992130125426601994> "+args[0])
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")

    await eco.restar(`${usuario}.${user}.efectivo`, amount)

    message.channel.send(embed)

  {
    
   var random = Math.floor(5200)

        armas.sumar(`${usuario}.${user}.municion18`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }
  }  
}