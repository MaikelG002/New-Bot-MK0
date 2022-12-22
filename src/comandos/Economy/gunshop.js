const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class gunshop extends Comandos {
  constructor() {
    super('gunshop', 'Economy', [""]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Tienda De Armas")
        .setImage("https://media.discordapp.net/attachments/528310273761607693/992209109011140738/Maikel_Graal_Economyv2.png?width=427&height=296")
        .setColor("RED")
        .setFooter("Para ver estadistica del arma usa !info(nombre del arma) en minuscula y sin ()")
        
        return message.channel.send(solonumeros)
    }
  }
  }