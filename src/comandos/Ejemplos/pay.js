const Comandos = require('../../util/estructuras/Comandos');
const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class pay extends Comandos {
  constructor() {
    super('pay', 'Ejemplos', [""]);
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

     let texto = args.slice(0).join(" ")
 if(!texto){
   return message.channel.send("Debes Escribir Una Cantidad")
 }

    {
  let subasta = await eco.get(`${user}.coins`) || 0
    if(subasta < texto)return message.channel.send(`<a:Goldpacks:985536866071760946> Gold Coin Insuficiente Solo tienes $${subasta}`)
  }

        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Auction")
        .setDescription(`${usuario} 
        Dio <a:Goldpacks:985536866071760946> $${texto}`) 
        .setColor("YELLOW")
        .setFooter("Comando By MaikelG")
        
        return message.channel.send(solonumeros)
      

  }


}


