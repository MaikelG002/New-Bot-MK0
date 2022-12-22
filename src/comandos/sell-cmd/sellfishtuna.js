const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class sellfishperch extends Comandos {
  constructor() {
    super('sellfishtuna', 'sell-cmd', [""]);
  }

async run(client, message, args){

  
    let objs = {
      fishtuna: 850,
      
    }

    if(!objs[args[0]])return message.channel.send(`No se a seleccionado ningun pescado> !sellfishtuna fishtuna <:fishtuna:976231798885466223> `)

    let amount = objs[args[0]]
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(!eco.tiene(`${user}.pescado4`)){
        eco.establecer(`${user}`,
        {
          vida: 0, 
          efectivo: 0,
          banco: 0    
        }
      );
      
      message.channel.send("<:fishperch:976231833597534278> FishTuna Insuficiente Necesitas 850")
      return
    }

    let money = await eco.get(`${user}.pescado4`) || 0
    console.log(money)
    if(money < amount)return message.channel.send(" <:fishtuna:976231798885466223> FishTuna Insuficiente! Necesitas 850+")
  
  

    const embed = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription("Vendiste con exito 850 <:fishtuna:976231798885466223> "+args[0])
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")

    await eco.restar(`${user}.pescado4`, amount)

    message.channel.send(embed)

  {
   let random = Math.floor(Math.random() * (3500 - 5000)) + 5000

        eco.sumar(`${user}.efectivo`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }
  
  }  
}