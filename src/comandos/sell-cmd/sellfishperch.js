const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class sellfishperch extends Comandos {
  constructor() {
    super('sellfishperch', 'sell-cmd', [""]);
  }

async run(client, message, args){

  
    let objs = {
      fishperch: 500,
      
    }

    if(!objs[args[0]])return message.channel.send(`No se a seleccionado ningun pescado> !sellfishperch fishperch <:fishperch:976231833597534278> `)

    let amount = objs[args[0]]
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(!eco.tiene(`${user}.pescado3`)){
        eco.establecer(`${user}`,
        {
          vida: 0, 
          efectivo: 0,
          banco: 0    
        }
      );
      
      message.channel.send("<:fishperch:976231833597534278> Fishperch Insuficiente Necesitas 500")
      return
    }

    let money = await eco.get(`${user}.pescado2`) || 0
    console.log(money)
    if(money < amount)return message.channel.send(" <:fishperch:976231833597534278> Fishperch Insuficiente! Necesitas 500+")
  
  

    const embed = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription("Vendiste con exito 500 <:fishperch:976231833597534278> "+args[0])
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")

    await eco.restar(`${user}.pescado3`, amount)

    message.channel.send(embed)

  {
   let random = Math.floor(Math.random() * (2500 - 3000)) + 3000

        eco.sumar(`${user}.efectivo`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }
  
  }  
}