const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class help extends Comandos {
  constructor() {
    super('', 'Ejemplos', [""]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("TIENDA")
        .setDescription("HI")
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")
        
        return message.channel.send(solonumeros)
    }
  }
  }