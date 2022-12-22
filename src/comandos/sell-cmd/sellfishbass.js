const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class sellfishbass extends Comandos {
  constructor() {
    super('sellfishbass', 'sell-cmd', [""]);
  }

async run(client, message, args){

  
    let objs = {
      fishbass: 100,
      
    }

    if(!objs[args[0]])return message.channel.send(`No se a seleccionado ningun pescado> !sellfishbass fishbass <:fishbass:976231075510632538> `)

    let amount = objs[args[0]]
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(!eco.tiene(`${user}.pescado1`)){
        eco.establecer(`${user}`,
        {
          vida: 0, 
          efectivo: 0,
          banco: 0    
        }
      );
      
      message.channel.send("<:fishbass:976231075510632538> FishBass Insuficiente")
      return
    }

    let money = await eco.get(`${user}.pescado1`) || 0
    console.log(money)
    if(money < amount)return message.channel.send(" <:fishbass:976231075510632538> FishBass Insuficiente! Necesitas 100+")
  
  

    const embed = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription("Vendiste con exito 100 <:fishbass:976231075510632538> "+args[0])
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")

    await eco.restar(`${user}.pescado1`, amount)

    message.channel.send(embed)

  {
   let random = Math.floor(Math.random() * (400 - 1500)) + 1500

        eco.sumar(`${user}.efectivo`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }
  
  }  
}