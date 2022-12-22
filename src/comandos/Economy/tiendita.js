const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");



module.exports = class tiendita extends Comandos {
  constructor() {
    super('tiendita', 'Economy', [""]);
  }

async run(client, message, args){

  

  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("TIENDA")
        .setDescription(`
pizza: Cuesta 100
ice: Cuesta 10
cream: cuesta 150`) 
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")
        
        return message.channel.send(solonumeros)
    }
  
  }
  }