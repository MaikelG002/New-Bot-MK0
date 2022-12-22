const Comandos = require('../../util/estructuras/Comandos');
const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let loterys = new megadb.crearDB("loteria");

module.exports = class loteria extends Comandos {
  constructor() {
    super('loteria', 'Ejemplos', [""]);
  }

 async run(client, message, args){

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

   {
  let ban = await eco.get(`${user}.ban`)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }

     let texto = args.slice(0).join(" ")
 if(!texto){
   return message.channel.send("Debes Escribir Una Cantidad Para participar en la loteria")
 }



    {
  let subasta = await eco.get(`${user}.efectivo`) || 0
    if(subasta < texto)return message.channel.send(`<:era_petzmoney1:1017944727271768065>Efectivo Insuficiente Solo tienes $${subasta}`)
  }

  if(!loterys.tiene(`${user}`)){
    loterys.establecer(`${user}`,
       "Esta persona esta participando en la loteria"
    )
  };

  let lotery = "601776622797848579"

  eco.sumar(`${lotery}.loteria1`, texto)

  eco.restar(`${user}.efectivo`, texto)

        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("<:era_petzmoney1:1017944727271768065>Loteria <:era_petzmoney1:1017944727271768065>")
        .setDescription(`${usuario} 
        Dio <:era_petzmoney1:1017944727271768065> $${texto} Gralats a la loteria`) 
        .setColor("YELLOW")
        .setFooter("Espera cada domingos para saber el ganador")
        
        return message.channel.send(solonumeros)
      

  }


}

