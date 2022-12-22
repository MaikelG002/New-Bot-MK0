const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let armas = new megadb.crearDB("armas");


module.exports = class usar extends Comandos {
  constructor() {
    super('usar', 'Economy', [""]);
  }

  async run(client, message, args) {

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag
let hamburguesa =  await eco.get(`${user}.hamburguesa`)

    let hotdog =  await eco.get(`${user}.hotdog`)

    let vida =  await eco.get(`${user}.vida`)


    
    
    let Embed0 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas Una hamburguesa <:emoji_36:993525561962008628> **`)

    let Embed03 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas Un Hot Dog <:emoji_37:993525586968453190> **`)

     let Embed01 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**<:energia:985182546595827782> Tienes +100 De vida <:energia:985182546595827782>**`)

   
     
     switch(args[0]) {
        
    case 'hamburguesa': 
         
if (hamburguesa < 1) return message.channel.send(Embed0)

         if (vida > 100) return message.channel.send(Embed01)
         
var random1 = Math.floor(Math.random() * (4 - 8)) + 8

        let Embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Te Comiste 5  <:emoji_36:993525561962008628> Hamburguesa y te curaste ${random1}% De Vida`);

       

        eco.sumar(`${user}.vida`, random1)

         eco.restar(`${user}.hamburguesa`, 5)
         
         
        message.channel.send(Embed1)
    break;

         case 'hotdog': 
         
if (hotdog < 1) return message.channel.send(Embed03)

         if (vida > 100) return message.channel.send(Embed01)
         
var random2 = Math.floor(Math.random() * (10 - 15)) + 15

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Te Comiste 5  <:emoji_37:993525586968453190> Hot Dog y te curaste ${random2}% De Vida`);

       

        eco.sumar(`${user}.vida`, random2)

         eco.restar(`${user}.hotdog`, 5)
         
         
        message.channel.send(Embed2)
    break;

  }
 }
}