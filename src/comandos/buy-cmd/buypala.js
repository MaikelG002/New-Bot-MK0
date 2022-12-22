const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class buypala extends Comandos {
  constructor() {
    super('buy4', 'buy-cmd', [""]);
  }

async run(client, message, args){

  
    let objs = {
      pala: 250,
      
    }

    if(!objs[args[0]])return message.channel.send(`No se a seleccionado ningun objeto> !buy4 pala`)

    let amount = objs[args[0]]
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(!eco.tiene(`${usuario}.${user}.pala`)){
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
    .setDescription("Compraste con exito 65 <:pala:985536768029909044> "+args[0])
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")

    await eco.restar(`${usuario}..${user}.efectivo`, amount)

    message.channel.send(embed)

  {
   var random = Math.floor(65)

        eco.sumar(`${usuario}.${user}.pala`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }
  }  
}