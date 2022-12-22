const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class sellfishred extends Comandos {
  constructor() {
    super('sellfishred', 'sell-cmd', [""]);
  }

async run(client, message, args){

  
    let objs = {
      fishred: 250,
      
    }

    if(!objs[args[0]])return message.channel.send(`No se a seleccionado ningun pescado> !sellfishred fishred <:fishred:976231751535964190> `)

    let amount = objs[args[0]]
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(!eco.tiene(`${user}.pescado2`)){
        eco.establecer(`${user}`,
        {
          vida: 0, 
          efectivo: 0,
          banco: 0    
        }
      );
      
      message.channel.send("<:fishred:976231751535964190> FishRed Insuficiente")
      return
    }

    let money = await eco.get(`${user}.pescado2`) || 0
    console.log(money)
    if(money < amount)return message.channel.send(" <:fishred:976231751535964190> FishRed Insuficiente! Necesitas 250+")
  
  

    const embed = new Discord.MessageEmbed()

    .setAuthor("Venta Realizada!")
    .setDescription("Vendiste con exito 250 <:fishred:976231751535964190> "+args[0])
    .setColor("BLUE")
    .setFooter("Comando by MaikelG")

    await eco.restar(`${user}.pescado2`, amount)

    message.channel.send(embed)

  {
   let random = Math.floor(Math.random() * (1000 - 2500)) + 2500

        eco.sumar(`${user}.efectivo`, random)//Sirve para sumar lo que te dieron con el dinero que tienes ya guardado

  }
  
  }  
}