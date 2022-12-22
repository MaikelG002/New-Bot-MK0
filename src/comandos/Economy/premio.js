const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class premio extends Comandos {
  constructor() {
    super('premio', 'Ejemplos', [""]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

   

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("<:emoji_59:926972847178530886> PREMIOS <:emoji_59:926972847178530886>")
        .setDescription(`
1- <:emoji_39:892039951712141332>
Tro: 100$ = 

2- <:emoji_39:892039951712141332> 
Tro: 150$ 
`)
        
        .setColor("GREEN")
        .setFooter("Comando By MaikelG")
        
        return message.channel.send(solonumeros)
    }
  }
  }